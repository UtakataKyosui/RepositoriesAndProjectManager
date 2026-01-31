import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RepositoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryOrderByRelationAggregateInput>;
export const RepositoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
