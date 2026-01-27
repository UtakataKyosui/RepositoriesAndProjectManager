import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import dotenvx from '@dotenvx/dotenvx'

dotenvx.config();

const prismaClientSingleton = () => {
    const connectionString = dotenvx.get('DATABASE_URL') || ''

    // Handle pg-connection-string security warning by explicit setting
    // The warning states 'require', 'prefer', 'verify-ca' are aliases for 'verify-full' in current pg versions
    // To silence warning and maintain security, we explicit upgrade them to 'verify-full'
    let poolConfigString = connectionString;
    try {
        const url = new URL(connectionString);
        const sslMode = url.searchParams.get('sslmode');
        if (sslMode === 'require' || sslMode === 'prefer' || sslMode === 'verify-ca') {
            url.searchParams.set('sslmode', 'verify-full');
            poolConfigString = url.toString();
        }
    } catch (e) {
        // Fallback to original string if URL parsing fails
        console.warn('Failed to parse DATABASE_URL for SSL mode adjustment', e);
    }

    const pool = new Pool({ connectionString: poolConfigString })
    const adapter = new PrismaPg(pool)

    return new PrismaClient({ adapter })
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (dotenvx.get('NODE_ENV') !== 'production') globalThis.prismaGlobal = prisma
