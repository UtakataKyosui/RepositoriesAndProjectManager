import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  name: z.literal(true).optional(),
  projectId: z.literal(true).optional()
}).strict();
export const RepositoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.RepositoryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryMaxAggregateInputType>;
export const RepositoryMaxAggregateInputObjectZodSchema = makeSchema();
