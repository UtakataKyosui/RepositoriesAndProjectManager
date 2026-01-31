import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './objects/RoadmapGoalInclude.schema';
import { RoadmapGoalCreateInputObjectSchema as RoadmapGoalCreateInputObjectSchema } from './objects/RoadmapGoalCreateInput.schema';
import { RoadmapGoalUncheckedCreateInputObjectSchema as RoadmapGoalUncheckedCreateInputObjectSchema } from './objects/RoadmapGoalUncheckedCreateInput.schema';

export const RoadmapGoalCreateOneSchema: z.ZodType<Prisma.RoadmapGoalCreateArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), data: z.union([RoadmapGoalCreateInputObjectSchema, RoadmapGoalUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalCreateArgs>;

export const RoadmapGoalCreateOneZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), data: z.union([RoadmapGoalCreateInputObjectSchema, RoadmapGoalUncheckedCreateInputObjectSchema]) }).strict();