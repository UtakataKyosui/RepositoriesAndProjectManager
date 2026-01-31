import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional()
}).strict();
export const RepositoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryMinOrderByAggregateInput>;
export const RepositoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
