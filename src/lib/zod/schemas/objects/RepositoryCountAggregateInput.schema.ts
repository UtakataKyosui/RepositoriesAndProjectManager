import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  name: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RepositoryCountAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCountAggregateInputType>;
export const RepositoryCountAggregateInputObjectZodSchema = makeSchema();
