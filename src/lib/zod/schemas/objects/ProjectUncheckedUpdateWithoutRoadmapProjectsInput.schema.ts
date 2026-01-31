import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { EnumProjectStatusFieldUpdateOperationsInputObjectSchema as EnumProjectStatusFieldUpdateOperationsInputObjectSchema } from './EnumProjectStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RepositoryUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as RepositoryUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './RepositoryUncheckedUpdateManyWithoutProjectNestedInput.schema';
import { ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputObjectSchema as ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputObjectSchema } from './ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInput.schema';
import { ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputObjectSchema as ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputObjectSchema } from './ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ProjectStatusSchema, z.lazy(() => EnumProjectStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  repositories: z.lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRoadmapProjectsInput>;
export const ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
