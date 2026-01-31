import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectDependencyCountOrderByAggregateInputObjectSchema as ProjectDependencyCountOrderByAggregateInputObjectSchema } from './ProjectDependencyCountOrderByAggregateInput.schema';
import { ProjectDependencyMaxOrderByAggregateInputObjectSchema as ProjectDependencyMaxOrderByAggregateInputObjectSchema } from './ProjectDependencyMaxOrderByAggregateInput.schema';
import { ProjectDependencyMinOrderByAggregateInputObjectSchema as ProjectDependencyMinOrderByAggregateInputObjectSchema } from './ProjectDependencyMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  dependencyId: SortOrderSchema.optional(),
  dependentId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProjectDependencyCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectDependencyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectDependencyMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectDependencyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyOrderByWithAggregationInput>;
export const ProjectDependencyOrderByWithAggregationInputObjectZodSchema = makeSchema();
