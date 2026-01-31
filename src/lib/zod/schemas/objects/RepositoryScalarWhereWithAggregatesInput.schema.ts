import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const repositoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RepositoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RepositoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RepositoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RepositoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RepositoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RepositoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RepositoryScalarWhereWithAggregatesInput> = repositoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RepositoryScalarWhereWithAggregatesInput>;
export const RepositoryScalarWhereWithAggregatesInputObjectZodSchema = repositoryscalarwherewithaggregatesinputSchema;
