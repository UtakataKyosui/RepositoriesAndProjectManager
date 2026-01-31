import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dependencyId: SortOrderSchema.optional(),
  dependentId: SortOrderSchema.optional()
}).strict();
export const ProjectDependencyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyMinOrderByAggregateInput>;
export const ProjectDependencyMinOrderByAggregateInputObjectZodSchema = makeSchema();
