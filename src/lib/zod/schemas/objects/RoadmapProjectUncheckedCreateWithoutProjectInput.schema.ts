import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  roadmapId: z.string()
}).strict();
export const RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutProjectInput>;
export const RoadmapProjectUncheckedCreateWithoutProjectInputObjectZodSchema = makeSchema();
