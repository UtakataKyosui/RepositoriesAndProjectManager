import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional()
}).strict();
export const RepositoryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryMaxOrderByAggregateInput>;
export const RepositoryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
