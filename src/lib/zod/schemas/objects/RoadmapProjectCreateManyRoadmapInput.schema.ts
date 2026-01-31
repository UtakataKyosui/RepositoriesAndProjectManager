import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  projectId: z.string()
}).strict();
export const RoadmapProjectCreateManyRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInput>;
export const RoadmapProjectCreateManyRoadmapInputObjectZodSchema = makeSchema();
