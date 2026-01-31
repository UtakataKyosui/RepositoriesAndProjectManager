import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoadmapProjectCountOrderByAggregateInputObjectSchema as RoadmapProjectCountOrderByAggregateInputObjectSchema } from './RoadmapProjectCountOrderByAggregateInput.schema';
import { RoadmapProjectAvgOrderByAggregateInputObjectSchema as RoadmapProjectAvgOrderByAggregateInputObjectSchema } from './RoadmapProjectAvgOrderByAggregateInput.schema';
import { RoadmapProjectMaxOrderByAggregateInputObjectSchema as RoadmapProjectMaxOrderByAggregateInputObjectSchema } from './RoadmapProjectMaxOrderByAggregateInput.schema';
import { RoadmapProjectMinOrderByAggregateInputObjectSchema as RoadmapProjectMinOrderByAggregateInputObjectSchema } from './RoadmapProjectMinOrderByAggregateInput.schema';
import { RoadmapProjectSumOrderByAggregateInputObjectSchema as RoadmapProjectSumOrderByAggregateInputObjectSchema } from './RoadmapProjectSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  _count: z.lazy(() => RoadmapProjectCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RoadmapProjectAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoadmapProjectMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoadmapProjectMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RoadmapProjectSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoadmapProjectOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectOrderByWithAggregationInput>;
export const RoadmapProjectOrderByWithAggregationInputObjectZodSchema = makeSchema();
