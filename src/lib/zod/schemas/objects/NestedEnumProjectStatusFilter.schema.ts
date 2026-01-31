import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema'

const nestedenumprojectstatusfilterSchema = z.object({
  equals: ProjectStatusSchema.optional(),
  in: ProjectStatusSchema.array().optional(),
  notIn: ProjectStatusSchema.array().optional(),
  not: z.union([ProjectStatusSchema, z.lazy(() => NestedEnumProjectStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumProjectStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumProjectStatusFilter> = nestedenumprojectstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumProjectStatusFilter>;
export const NestedEnumProjectStatusFilterObjectZodSchema = nestedenumprojectstatusfilterSchema;
