import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  roadmapId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutProjectInput>;
export const RoadmapProjectUncheckedUpdateWithoutProjectInputObjectZodSchema = makeSchema();
