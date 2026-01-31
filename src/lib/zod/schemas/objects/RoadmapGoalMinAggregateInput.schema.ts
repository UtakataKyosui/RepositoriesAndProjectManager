import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  order: z.literal(true).optional(),
  isCompleted: z.literal(true).optional(),
  roadmapId: z.literal(true).optional()
}).strict();
export const RoadmapGoalMinAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalMinAggregateInputType>;
export const RoadmapGoalMinAggregateInputObjectZodSchema = makeSchema();
