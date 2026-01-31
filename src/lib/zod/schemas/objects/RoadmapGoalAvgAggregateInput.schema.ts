import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const RoadmapGoalAvgAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalAvgAggregateInputType>;
export const RoadmapGoalAvgAggregateInputObjectZodSchema = makeSchema();
