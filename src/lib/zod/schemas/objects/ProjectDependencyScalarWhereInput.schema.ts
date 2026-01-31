import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const projectdependencyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema).array()]).optional(),
  dependencyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dependentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProjectDependencyScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereInput> = projectdependencyscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectDependencyScalarWhereInput>;
export const ProjectDependencyScalarWhereInputObjectZodSchema = projectdependencyscalarwhereinputSchema;
