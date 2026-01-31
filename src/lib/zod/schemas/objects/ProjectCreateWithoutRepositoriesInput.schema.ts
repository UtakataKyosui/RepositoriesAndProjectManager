import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { UserCreateNestedOneWithoutProjectsInputObjectSchema as UserCreateNestedOneWithoutProjectsInputObjectSchema } from './UserCreateNestedOneWithoutProjectsInput.schema';
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
  user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputObjectSchema),
  dependencies: z.lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutRepositoriesInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutRepositoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutRepositoriesInput>;
export const ProjectCreateWithoutRepositoriesInputObjectZodSchema = makeSchema();
