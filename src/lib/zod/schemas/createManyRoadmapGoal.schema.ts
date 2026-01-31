import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalCreateManyInputObjectSchema as RoadmapGoalCreateManyInputObjectSchema } from './objects/RoadmapGoalCreateManyInput.schema';

export const RoadmapGoalCreateManySchema: z.ZodType<Prisma.RoadmapGoalCreateManyArgs> = z.object({ data: z.union([ RoadmapGoalCreateManyInputObjectSchema, z.array(RoadmapGoalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalCreateManyArgs>;

export const RoadmapGoalCreateManyZodSchema = z.object({ data: z.union([ RoadmapGoalCreateManyInputObjectSchema, z.array(RoadmapGoalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();