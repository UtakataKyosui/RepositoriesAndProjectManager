import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  order: z.number().int().optional(),
  isCompleted: z.boolean().optional()
}).strict();
export const RoadmapGoalCreateManyRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInput>;
export const RoadmapGoalCreateManyRoadmapInputObjectZodSchema = makeSchema();
