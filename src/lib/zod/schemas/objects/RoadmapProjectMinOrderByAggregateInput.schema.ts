import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional()
}).strict();
export const RoadmapProjectMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectMinOrderByAggregateInput>;
export const RoadmapProjectMinOrderByAggregateInputObjectZodSchema = makeSchema();
