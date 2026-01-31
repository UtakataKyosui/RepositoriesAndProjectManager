import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './RepositoryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RepositoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => RepositoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => RepositoryWhereInputObjectSchema).optional()
}).strict();
export const RepositoryListRelationFilterObjectSchema: z.ZodType<Prisma.RepositoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryListRelationFilter>;
export const RepositoryListRelationFilterObjectZodSchema = makeSchema();
