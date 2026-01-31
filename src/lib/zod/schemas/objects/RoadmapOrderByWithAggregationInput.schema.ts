import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoadmapCountOrderByAggregateInputObjectSchema as RoadmapCountOrderByAggregateInputObjectSchema } from './RoadmapCountOrderByAggregateInput.schema';
import { RoadmapMaxOrderByAggregateInputObjectSchema as RoadmapMaxOrderByAggregateInputObjectSchema } from './RoadmapMaxOrderByAggregateInput.schema';
import { RoadmapMinOrderByAggregateInputObjectSchema as RoadmapMinOrderByAggregateInputObjectSchema } from './RoadmapMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  published: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => RoadmapCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoadmapMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoadmapMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoadmapOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoadmapOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapOrderByWithAggregationInput>;
export const RoadmapOrderByWithAggregationInputObjectZodSchema = makeSchema();
