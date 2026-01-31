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
export const RoadmapGoalCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCountOrderByAggregateInput>;
export const RoadmapGoalCountOrderByAggregateInputObjectZodSchema = makeSchema();
