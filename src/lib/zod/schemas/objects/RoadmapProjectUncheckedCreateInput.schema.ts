import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  roadmapId: z.string(),
  projectId: z.string()
}).strict();
export const RoadmapProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUncheckedCreateInput>;
export const RoadmapProjectUncheckedCreateInputObjectZodSchema = makeSchema();
