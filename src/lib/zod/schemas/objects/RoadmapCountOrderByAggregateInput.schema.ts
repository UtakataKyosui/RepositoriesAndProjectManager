import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const RoadmapCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCountOrderByAggregateInput>;
export const RoadmapCountOrderByAggregateInputObjectZodSchema = makeSchema();
