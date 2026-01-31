import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  order: z.number().int().optional(),
  isCompleted: z.boolean().optional(),
  roadmapId: z.string()
}).strict();
export const RoadmapGoalCreateManyInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateManyInput>;
export const RoadmapGoalCreateManyInputObjectZodSchema = makeSchema();
