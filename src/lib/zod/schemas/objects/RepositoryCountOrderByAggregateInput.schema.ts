import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional()
}).strict();
export const RepositoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCountOrderByAggregateInput>;
export const RepositoryCountOrderByAggregateInputObjectZodSchema = makeSchema();
