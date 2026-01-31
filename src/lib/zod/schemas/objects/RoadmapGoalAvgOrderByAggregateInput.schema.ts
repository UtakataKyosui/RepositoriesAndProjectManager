import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const RoadmapGoalAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalAvgOrderByAggregateInput>;
export const RoadmapGoalAvgOrderByAggregateInputObjectZodSchema = makeSchema();
