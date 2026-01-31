import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RepositoryFindManySchema as RepositoryFindManySchema } from '../findManyRepository.schema';
import { ProjectDependencyFindManySchema as ProjectDependencyFindManySchema } from '../findManyProjectDependency.schema';
import { RoadmapProjectFindManySchema as RoadmapProjectFindManySchema } from '../findManyRoadmapProject.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  repositories: z.union([z.boolean(), z.lazy(() => RepositoryFindManySchema)]).optional(),
  dependencies: z.union([z.boolean(), z.lazy(() => ProjectDependencyFindManySchema)]).optional(),
  dependents: z.union([z.boolean(), z.lazy(() => ProjectDependencyFindManySchema)]).optional(),
  roadmapProjects: z.union([z.boolean(), z.lazy(() => RoadmapProjectFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectIncludeObjectSchema: z.ZodType<Prisma.ProjectInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectInclude>;
export const ProjectIncludeObjectZodSchema = makeSchema();
