import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const RoadmapProjectSumAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectSumAggregateInputType>;
export const RoadmapProjectSumAggregateInputObjectZodSchema = makeSchema();
