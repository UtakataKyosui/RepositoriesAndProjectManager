import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { EnumProjectStatusFieldUpdateOperationsInputObjectSchema as EnumProjectStatusFieldUpdateOperationsInputObjectSchema } from './EnumProjectStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema as RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema } from './RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInput.schema';
import { RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema as RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema } from './RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ProjectStatusSchema, z.lazy(() => EnumProjectStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  goals: z.lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema).optional(),
  projects: z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputObjectSchema).optional()
}).strict();
export const RoadmapUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutUserInput>;
export const RoadmapUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
