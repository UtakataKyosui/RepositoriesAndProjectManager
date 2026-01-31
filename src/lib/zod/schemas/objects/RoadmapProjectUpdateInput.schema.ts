import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema as RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema } from './RoadmapUpdateOneRequiredWithoutProjectsNestedInput.schema';
import { ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  roadmap: z.lazy(() => RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema).optional()
}).strict();
export const RoadmapProjectUpdateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateInput>;
export const RoadmapProjectUpdateInputObjectZodSchema = makeSchema();
