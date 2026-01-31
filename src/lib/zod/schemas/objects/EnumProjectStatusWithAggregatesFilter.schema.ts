import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { NestedEnumProjectStatusWithAggregatesFilterObjectSchema as NestedEnumProjectStatusWithAggregatesFilterObjectSchema } from './NestedEnumProjectStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProjectStatusFilterObjectSchema as NestedEnumProjectStatusFilterObjectSchema } from './NestedEnumProjectStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ProjectStatusSchema.optional(),
  in: ProjectStatusSchema.array().optional(),
  notIn: ProjectStatusSchema.array().optional(),
  not: z.union([ProjectStatusSchema, z.lazy(() => NestedEnumProjectStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProjectStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProjectStatusFilterObjectSchema).optional()
}).strict();
export const EnumProjectStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumProjectStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProjectStatusWithAggregatesFilter>;
export const EnumProjectStatusWithAggregatesFilterObjectZodSchema = makeSchema();
