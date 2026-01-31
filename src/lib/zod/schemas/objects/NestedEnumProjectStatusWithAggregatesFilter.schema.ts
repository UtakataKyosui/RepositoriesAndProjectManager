import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProjectStatusFilterObjectSchema as NestedEnumProjectStatusFilterObjectSchema } from './NestedEnumProjectStatusFilter.schema'

const nestedenumprojectstatuswithaggregatesfilterSchema = z.object({
  equals: ProjectStatusSchema.optional(),
  in: ProjectStatusSchema.array().optional(),
  notIn: ProjectStatusSchema.array().optional(),
  not: z.union([ProjectStatusSchema, z.lazy(() => NestedEnumProjectStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProjectStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProjectStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumProjectStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumProjectStatusWithAggregatesFilter> = nestedenumprojectstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumProjectStatusWithAggregatesFilter>;
export const NestedEnumProjectStatusWithAggregatesFilterObjectZodSchema = nestedenumprojectstatuswithaggregatesfilterSchema;
