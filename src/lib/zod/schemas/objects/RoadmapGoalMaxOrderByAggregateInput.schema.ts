import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  isCompleted: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional()
}).strict();
export const RoadmapGoalMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalMaxOrderByAggregateInput>;
export const RoadmapGoalMaxOrderByAggregateInputObjectZodSchema = makeSchema();
