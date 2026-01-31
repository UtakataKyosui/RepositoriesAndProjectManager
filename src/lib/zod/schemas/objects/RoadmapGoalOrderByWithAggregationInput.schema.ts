import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoadmapGoalCountOrderByAggregateInputObjectSchema as RoadmapGoalCountOrderByAggregateInputObjectSchema } from './RoadmapGoalCountOrderByAggregateInput.schema';
import { RoadmapGoalAvgOrderByAggregateInputObjectSchema as RoadmapGoalAvgOrderByAggregateInputObjectSchema } from './RoadmapGoalAvgOrderByAggregateInput.schema';
import { RoadmapGoalMaxOrderByAggregateInputObjectSchema as RoadmapGoalMaxOrderByAggregateInputObjectSchema } from './RoadmapGoalMaxOrderByAggregateInput.schema';
import { RoadmapGoalMinOrderByAggregateInputObjectSchema as RoadmapGoalMinOrderByAggregateInputObjectSchema } from './RoadmapGoalMinOrderByAggregateInput.schema';
import { RoadmapGoalSumOrderByAggregateInputObjectSchema as RoadmapGoalSumOrderByAggregateInputObjectSchema } from './RoadmapGoalSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  isCompleted: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional(),
  _count: z.lazy(() => RoadmapGoalCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RoadmapGoalAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoadmapGoalMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoadmapGoalMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RoadmapGoalSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoadmapGoalOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalOrderByWithAggregationInput>;
export const RoadmapGoalOrderByWithAggregationInputObjectZodSchema = makeSchema();
