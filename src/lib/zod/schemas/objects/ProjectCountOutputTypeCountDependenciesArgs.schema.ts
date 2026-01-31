import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './ProjectDependencyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereInputObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeCountDependenciesArgsObjectSchema = makeSchema();
export const ProjectCountOutputTypeCountDependenciesArgsObjectZodSchema = makeSchema();
