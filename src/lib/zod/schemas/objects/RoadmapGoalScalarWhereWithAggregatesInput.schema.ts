import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const roadmapgoalscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isCompleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  roadmapId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapGoalScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereWithAggregatesInput> = roadmapgoalscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoadmapGoalScalarWhereWithAggregatesInput>;
export const RoadmapGoalScalarWhereWithAggregatesInputObjectZodSchema = roadmapgoalscalarwherewithaggregatesinputSchema;
