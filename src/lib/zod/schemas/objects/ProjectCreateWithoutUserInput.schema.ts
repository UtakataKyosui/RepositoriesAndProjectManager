import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RepositoryCreateNestedManyWithoutProjectInputObjectSchema as RepositoryCreateNestedManyWithoutProjectInputObjectSchema } from './RepositoryCreateNestedManyWithoutProjectInput.schema';
import { ProjectDependencyCreateNestedManyWithoutDependencyInputObjectSchema as ProjectDependencyCreateNestedManyWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateNestedManyWithoutDependencyInput.schema';
import { ProjectDependencyCreateNestedManyWithoutDependentInputObjectSchema as ProjectDependencyCreateNestedManyWithoutDependentInputObjectSchema } from './ProjectDependencyCreateNestedManyWithoutDependentInput.schema';
import { RoadmapProjectCreateNestedManyWithoutProjectInputObjectSchema as RoadmapProjectCreateNestedManyWithoutProjectInputObjectSchema } from './RoadmapProjectCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  repositories: z.lazy(() => RepositoryCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutUserInput>;
export const ProjectCreateWithoutUserInputObjectZodSchema = makeSchema();
