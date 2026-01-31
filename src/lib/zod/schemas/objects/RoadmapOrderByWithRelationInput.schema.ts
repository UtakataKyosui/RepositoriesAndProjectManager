import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoadmapGoalOrderByRelationAggregateInputObjectSchema as RoadmapGoalOrderByRelationAggregateInputObjectSchema } from './RoadmapGoalOrderByRelationAggregateInput.schema';
import { RoadmapProjectOrderByRelationAggregateInputObjectSchema as RoadmapProjectOrderByRelationAggregateInputObjectSchema } from './RoadmapProjectOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  published: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  goals: z.lazy(() => RoadmapGoalOrderByRelationAggregateInputObjectSchema).optional(),
  projects: z.lazy(() => RoadmapProjectOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RoadmapOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoadmapOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapOrderByWithRelationInput>;
export const RoadmapOrderByWithRelationInputObjectZodSchema = makeSchema();
