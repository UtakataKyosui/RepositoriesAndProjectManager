import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order: z.literal(true).optional(),
  roadmapId: z.literal(true).optional(),
  projectId: z.literal(true).optional()
}).strict();
export const RoadmapProjectMaxAggregateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectMaxAggregateInputType>;
export const RoadmapProjectMaxAggregateInputObjectZodSchema = makeSchema();
