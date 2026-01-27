import { defineConfig } from 'prisma/config';
import * as dotenvx from '@dotenvx/dotenvx';

// Load environment variables from .env files
dotenvx.config();

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: dotenvx.get('DATABASE_URL') || process.env.DATABASE_URL,
    },
});
