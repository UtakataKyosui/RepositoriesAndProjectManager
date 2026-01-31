import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutRoadmapInput>;
export const RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectZodSchema = makeSchema();
