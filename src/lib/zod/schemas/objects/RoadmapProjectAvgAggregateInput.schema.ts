import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const RoadmapProjectAvgAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectAvgAggregateInputType>;
export const RoadmapProjectAvgAggregateInputObjectZodSchema = makeSchema();
