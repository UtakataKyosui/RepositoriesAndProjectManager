import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dependencyId: SortOrderSchema.optional(),
  dependentId: SortOrderSchema.optional()
}).strict();
export const ProjectDependencyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyMaxOrderByAggregateInput>;
export const ProjectDependencyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
