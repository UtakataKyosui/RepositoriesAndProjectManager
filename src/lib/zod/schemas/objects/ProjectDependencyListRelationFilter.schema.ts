import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './ProjectDependencyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProjectDependencyWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProjectDependencyWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProjectDependencyWhereInputObjectSchema).optional()
}).strict();
export const ProjectDependencyListRelationFilterObjectSchema: z.ZodType<Prisma.ProjectDependencyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyListRelationFilter>;
export const ProjectDependencyListRelationFilterObjectZodSchema = makeSchema();
