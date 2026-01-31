import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RepositoryCountOrderByAggregateInputObjectSchema as RepositoryCountOrderByAggregateInputObjectSchema } from './RepositoryCountOrderByAggregateInput.schema';
import { RepositoryMaxOrderByAggregateInputObjectSchema as RepositoryMaxOrderByAggregateInputObjectSchema } from './RepositoryMaxOrderByAggregateInput.schema';
import { RepositoryMinOrderByAggregateInputObjectSchema as RepositoryMinOrderByAggregateInputObjectSchema } from './RepositoryMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectId: SortOrderSchema.optional(),
  _count: z.lazy(() => RepositoryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RepositoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RepositoryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RepositoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RepositoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryOrderByWithAggregationInput>;
export const RepositoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
