import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RoadmapOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapOrderByRelationAggregateInput>;
export const RoadmapOrderByRelationAggregateInputObjectZodSchema = makeSchema();
