import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './objects/RoadmapGoalInclude.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './objects/RoadmapGoalWhereUniqueInput.schema';

export const RoadmapGoalDeleteOneSchema: z.ZodType<Prisma.RoadmapGoalDeleteArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), where: RoadmapGoalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalDeleteArgs>;

export const RoadmapGoalDeleteOneZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), where: RoadmapGoalWhereUniqueInputObjectSchema }).strict();