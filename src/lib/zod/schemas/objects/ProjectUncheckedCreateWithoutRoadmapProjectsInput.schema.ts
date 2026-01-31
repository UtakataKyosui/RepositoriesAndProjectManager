import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema as RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateNestedManyWithoutDependentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  repositories: z.lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutRoadmapProjectsInput>;
export const ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
