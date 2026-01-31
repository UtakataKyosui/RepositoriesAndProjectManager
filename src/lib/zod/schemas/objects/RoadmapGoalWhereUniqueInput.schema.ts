import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RoadmapGoalWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoadmapGoalWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalWhereUniqueInput>;
export const RoadmapGoalWhereUniqueInputObjectZodSchema = makeSchema();
