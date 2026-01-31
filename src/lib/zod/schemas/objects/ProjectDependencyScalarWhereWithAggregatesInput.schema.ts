import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const projectdependencyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  dependencyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  dependentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProjectDependencyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereWithAggregatesInput> = projectdependencyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectDependencyScalarWhereWithAggregatesInput>;
export const ProjectDependencyScalarWhereWithAggregatesInputObjectZodSchema = projectdependencyscalarwherewithaggregatesinputSchema;
