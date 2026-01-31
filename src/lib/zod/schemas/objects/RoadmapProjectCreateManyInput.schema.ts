import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  roadmapId: z.string(),
  projectId: z.string()
}).strict();
export const RoadmapProjectCreateManyInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyInput>;
export const RoadmapProjectCreateManyInputObjectZodSchema = makeSchema();
