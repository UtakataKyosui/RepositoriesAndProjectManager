import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCountOutputTypeCountRepositoriesArgsObjectSchema as ProjectCountOutputTypeCountRepositoriesArgsObjectSchema } from './ProjectCountOutputTypeCountRepositoriesArgs.schema';
import { ProjectCountOutputTypeCountDependenciesArgsObjectSchema as ProjectCountOutputTypeCountDependenciesArgsObjectSchema } from './ProjectCountOutputTypeCountDependenciesArgs.schema';
import { ProjectCountOutputTypeCountDependentsArgsObjectSchema as ProjectCountOutputTypeCountDependentsArgsObjectSchema } from './ProjectCountOutputTypeCountDependentsArgs.schema';
import { ProjectCountOutputTypeCountRoadmapProjectsArgsObjectSchema as ProjectCountOutputTypeCountRoadmapProjectsArgsObjectSchema } from './ProjectCountOutputTypeCountRoadmapProjectsArgs.schema'

const makeSchema = () => z.object({
  repositories: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountRepositoriesArgsObjectSchema)]).optional(),
  dependencies: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountDependenciesArgsObjectSchema)]).optional(),
  dependents: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountDependentsArgsObjectSchema)]).optional(),
  roadmapProjects: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountRoadmapProjectsArgsObjectSchema)]).optional()
}).strict();
export const ProjectCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCountOutputTypeSelect>;
export const ProjectCountOutputTypeSelectObjectZodSchema = makeSchema();
