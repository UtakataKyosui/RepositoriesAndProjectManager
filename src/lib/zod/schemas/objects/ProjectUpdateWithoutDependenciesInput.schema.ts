import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { EnumProjectStatusFieldUpdateOperationsInputObjectSchema as EnumProjectStatusFieldUpdateOperationsInputObjectSchema } from './EnumProjectStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutProjectsNestedInputObjectSchema as UserUpdateOneRequiredWithoutProjectsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProjectsNestedInput.schema';
import { RepositoryUpdateManyWithoutProjectNestedInputObjectSchema as RepositoryUpdateManyWithoutProjectNestedInputObjectSchema } from './RepositoryUpdateManyWithoutProjectNestedInput.schema';
import { ProjectDependencyUpdateManyWithoutDependentNestedInputObjectSchema as ProjectDependencyUpdateManyWithoutDependentNestedInputObjectSchema } from './ProjectDependencyUpdateManyWithoutDependentNestedInput.schema';
import { RoadmapProjectUpdateManyWithoutProjectNestedInputObjectSchema as RoadmapProjectUpdateManyWithoutProjectNestedInputObjectSchema } from './RoadmapProjectUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ProjectStatusSchema, z.lazy(() => EnumProjectStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputObjectSchema).optional(),
  repositories: z.lazy(() => RepositoryUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutDependenciesInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutDependenciesInput>;
export const ProjectUpdateWithoutDependenciesInputObjectZodSchema = makeSchema();
