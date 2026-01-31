import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { EnumProjectStatusFieldUpdateOperationsInputObjectSchema as EnumProjectStatusFieldUpdateOperationsInputObjectSchema } from './EnumProjectStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutRoadmapsNestedInputObjectSchema as UserUpdateOneRequiredWithoutRoadmapsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoadmapsNestedInput.schema';
import { RoadmapGoalUpdateManyWithoutRoadmapNestedInputObjectSchema as RoadmapGoalUpdateManyWithoutRoadmapNestedInputObjectSchema } from './RoadmapGoalUpdateManyWithoutRoadmapNestedInput.schema';
import { RoadmapProjectUpdateManyWithoutRoadmapNestedInputObjectSchema as RoadmapProjectUpdateManyWithoutRoadmapNestedInputObjectSchema } from './RoadmapProjectUpdateManyWithoutRoadmapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ProjectStatusSchema, z.lazy(() => EnumProjectStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoadmapsNestedInputObjectSchema).optional(),
  goals: z.lazy(() => RoadmapGoalUpdateManyWithoutRoadmapNestedInputObjectSchema).optional(),
  projects: z.lazy(() => RoadmapProjectUpdateManyWithoutRoadmapNestedInputObjectSchema).optional()
}).strict();
export const RoadmapUpdateInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateInput>;
export const RoadmapUpdateInputObjectZodSchema = makeSchema();
