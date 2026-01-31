import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const RoadmapGoalSumAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalSumAggregateInputType>;
export const RoadmapGoalSumAggregateInputObjectZodSchema = makeSchema();
