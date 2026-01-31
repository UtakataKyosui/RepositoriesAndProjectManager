import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dependencyId: SortOrderSchema.optional(),
  dependentId: SortOrderSchema.optional()
}).strict();
export const ProjectDependencyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCountOrderByAggregateInput>;
export const ProjectDependencyCountOrderByAggregateInputObjectZodSchema = makeSchema();
