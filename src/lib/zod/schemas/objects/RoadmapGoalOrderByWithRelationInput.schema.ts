import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoadmapOrderByWithRelationInputObjectSchema as RoadmapOrderByWithRelationInputObjectSchema } from './RoadmapOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  isCompleted: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional(),
  roadmap: z.lazy(() => RoadmapOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RoadmapGoalOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalOrderByWithRelationInput>;
export const RoadmapGoalOrderByWithRelationInputObjectZodSchema = makeSchema();
