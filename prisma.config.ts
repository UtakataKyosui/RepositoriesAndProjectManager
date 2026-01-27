import { defineConfig } from 'prisma/config';
import * as dotenvx from '@dotenvx/dotenvx';

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: dotenvx.get('DATABASE_URL'),
    },
});
