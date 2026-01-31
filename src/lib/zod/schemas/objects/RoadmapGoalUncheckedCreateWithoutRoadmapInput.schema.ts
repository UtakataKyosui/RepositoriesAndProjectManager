import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  order: z.number().int().optional(),
  isCompleted: z.boolean().optional()
}).strict();
export const RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUncheckedCreateWithoutRoadmapInput>;
export const RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectZodSchema = makeSchema();
