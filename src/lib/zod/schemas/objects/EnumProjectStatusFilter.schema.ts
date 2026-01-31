import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { NestedEnumProjectStatusFilterObjectSchema as NestedEnumProjectStatusFilterObjectSchema } from './NestedEnumProjectStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ProjectStatusSchema.optional(),
  in: ProjectStatusSchema.array().optional(),
  notIn: ProjectStatusSchema.array().optional(),
  not: z.union([ProjectStatusSchema, z.lazy(() => NestedEnumProjectStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumProjectStatusFilterObjectSchema: z.ZodType<Prisma.EnumProjectStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProjectStatusFilter>;
export const EnumProjectStatusFilterObjectZodSchema = makeSchema();
