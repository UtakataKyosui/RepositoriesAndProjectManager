import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema).optional()
}).strict();
export const RoadmapProjectUpdateWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateWithoutRoadmapInput>;
export const RoadmapProjectUpdateWithoutRoadmapInputObjectZodSchema = makeSchema();
