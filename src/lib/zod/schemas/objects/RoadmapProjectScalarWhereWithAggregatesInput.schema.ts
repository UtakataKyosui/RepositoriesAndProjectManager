import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const roadmapprojectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  roadmapId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapProjectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoadmapProjectScalarWhereWithAggregatesInput> = roadmapprojectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoadmapProjectScalarWhereWithAggregatesInput>;
export const RoadmapProjectScalarWhereWithAggregatesInputObjectZodSchema = roadmapprojectscalarwherewithaggregatesinputSchema;
