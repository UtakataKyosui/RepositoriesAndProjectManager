import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalCreateManyInputObjectSchema as RoadmapGoalCreateManyInputObjectSchema } from './objects/RoadmapGoalCreateManyInput.schema';

export const RoadmapGoalCreateManyAndReturnSchema: z.ZodType<Prisma.RoadmapGoalCreateManyAndReturnArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), data: z.union([ RoadmapGoalCreateManyInputObjectSchema, z.array(RoadmapGoalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalCreateManyAndReturnArgs>;

export const RoadmapGoalCreateManyAndReturnZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), data: z.union([ RoadmapGoalCreateManyInputObjectSchema, z.array(RoadmapGoalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();