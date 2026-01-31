import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  order: z.number().int().optional(),
  isCompleted: z.boolean().optional()
}).strict();
export const RoadmapGoalCreateWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateWithoutRoadmapInput>;
export const RoadmapGoalCreateWithoutRoadmapInputObjectZodSchema = makeSchema();
