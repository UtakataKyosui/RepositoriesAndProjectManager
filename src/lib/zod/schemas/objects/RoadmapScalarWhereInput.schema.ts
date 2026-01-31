import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumProjectStatusFilterObjectSchema as EnumProjectStatusFilterObjectSchema } from './EnumProjectStatusFilter.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const roadmapscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapScalarWhereInputObjectSchema), z.lazy(() => RoadmapScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapScalarWhereInputObjectSchema), z.lazy(() => RoadmapScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumProjectStatusFilterObjectSchema), ProjectStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapScalarWhereInputObjectSchema: z.ZodType<Prisma.RoadmapScalarWhereInput> = roadmapscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoadmapScalarWhereInput>;
export const RoadmapScalarWhereInputObjectZodSchema = roadmapscalarwhereinputSchema;
