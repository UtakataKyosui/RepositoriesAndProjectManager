import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const RoadmapGoalSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalSumOrderByAggregateInput>;
export const RoadmapGoalSumOrderByAggregateInputObjectZodSchema = makeSchema();
