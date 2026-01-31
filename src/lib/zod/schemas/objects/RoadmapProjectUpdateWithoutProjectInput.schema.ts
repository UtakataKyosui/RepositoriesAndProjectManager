import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema as RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema } from './RoadmapUpdateOneRequiredWithoutProjectsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  roadmap: z.lazy(() => RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema).optional()
}).strict();
export const RoadmapProjectUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateWithoutProjectInput>;
export const RoadmapProjectUpdateWithoutProjectInputObjectZodSchema = makeSchema();
