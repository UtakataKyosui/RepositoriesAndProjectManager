import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const projectdependencywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectDependencyWhereInputObjectSchema), z.lazy(() => ProjectDependencyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectDependencyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectDependencyWhereInputObjectSchema), z.lazy(() => ProjectDependencyWhereInputObjectSchema).array()]).optional(),
  dependencyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dependentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dependency: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  dependent: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyWhereInputObjectSchema: z.ZodType<Prisma.ProjectDependencyWhereInput> = projectdependencywhereinputSchema as unknown as z.ZodType<Prisma.ProjectDependencyWhereInput>;
export const ProjectDependencyWhereInputObjectZodSchema = projectdependencywhereinputSchema;
