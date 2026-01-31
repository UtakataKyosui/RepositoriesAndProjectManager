import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const repositorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RepositoryWhereInputObjectSchema), z.lazy(() => RepositoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RepositoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RepositoryWhereInputObjectSchema), z.lazy(() => RepositoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const RepositoryWhereInputObjectSchema: z.ZodType<Prisma.RepositoryWhereInput> = repositorywhereinputSchema as unknown as z.ZodType<Prisma.RepositoryWhereInput>;
export const RepositoryWhereInputObjectZodSchema = repositorywhereinputSchema;
