import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema as RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateNestedManyWithoutDependentInput.schema';
import { RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputObjectSchema as RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  repositories: z.lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput>;
export const ProjectUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
