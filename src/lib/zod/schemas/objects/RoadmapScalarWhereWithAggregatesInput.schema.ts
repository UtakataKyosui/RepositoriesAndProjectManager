import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumProjectStatusWithAggregatesFilterObjectSchema as EnumProjectStatusWithAggregatesFilterObjectSchema } from './EnumProjectStatusWithAggregatesFilter.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const roadmapscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoadmapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  published: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumProjectStatusWithAggregatesFilterObjectSchema), ProjectStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoadmapScalarWhereWithAggregatesInput> = roadmapscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoadmapScalarWhereWithAggregatesInput>;
export const RoadmapScalarWhereWithAggregatesInputObjectZodSchema = roadmapscalarwherewithaggregatesinputSchema;
