import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const repositoryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RepositoryScalarWhereInputObjectSchema), z.lazy(() => RepositoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RepositoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RepositoryScalarWhereInputObjectSchema), z.lazy(() => RepositoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RepositoryScalarWhereInputObjectSchema: z.ZodType<Prisma.RepositoryScalarWhereInput> = repositoryscalarwhereinputSchema as unknown as z.ZodType<Prisma.RepositoryScalarWhereInput>;
export const RepositoryScalarWhereInputObjectZodSchema = repositoryscalarwhereinputSchema;
