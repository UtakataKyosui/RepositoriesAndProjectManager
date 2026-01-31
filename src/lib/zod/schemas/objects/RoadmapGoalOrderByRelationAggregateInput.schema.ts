import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RoadmapGoalOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalOrderByRelationAggregateInput>;
export const RoadmapGoalOrderByRelationAggregateInputObjectZodSchema = makeSchema();
