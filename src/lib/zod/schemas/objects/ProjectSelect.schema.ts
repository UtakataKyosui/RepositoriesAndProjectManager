import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RepositoryFindManySchema as RepositoryFindManySchema } from '../findManyRepository.schema';
import { ProjectDependencyFindManySchema as ProjectDependencyFindManySchema } from '../findManyProjectDependency.schema';
import { RoadmapProjectFindManySchema as RoadmapProjectFindManySchema } from '../findManyRoadmapProject.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  published: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  repositories: z.union([z.boolean(), z.lazy(() => RepositoryFindManySchema)]).optional(),
  dependencies: z.union([z.boolean(), z.lazy(() => ProjectDependencyFindManySchema)]).optional(),
  dependents: z.union([z.boolean(), z.lazy(() => ProjectDependencyFindManySchema)]).optional(),
  roadmapProjects: z.union([z.boolean(), z.lazy(() => RoadmapProjectFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectSelectObjectSchema: z.ZodType<Prisma.ProjectSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSelect>;
export const ProjectSelectObjectZodSchema = makeSchema();
