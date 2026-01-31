import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  published: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const RoadmapMaxAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapMaxAggregateInputType>;
export const RoadmapMaxAggregateInputObjectZodSchema = makeSchema();
