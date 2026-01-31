import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './objects/RoadmapGoalInclude.schema';
import { RoadmapGoalUpdateInputObjectSchema as RoadmapGoalUpdateInputObjectSchema } from './objects/RoadmapGoalUpdateInput.schema';
import { RoadmapGoalUncheckedUpdateInputObjectSchema as RoadmapGoalUncheckedUpdateInputObjectSchema } from './objects/RoadmapGoalUncheckedUpdateInput.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './objects/RoadmapGoalWhereUniqueInput.schema';

export const RoadmapGoalUpdateOneSchema: z.ZodType<Prisma.RoadmapGoalUpdateArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), data: z.union([RoadmapGoalUpdateInputObjectSchema, RoadmapGoalUncheckedUpdateInputObjectSchema]), where: RoadmapGoalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateArgs>;

export const RoadmapGoalUpdateOneZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), data: z.union([RoadmapGoalUpdateInputObjectSchema, RoadmapGoalUncheckedUpdateInputObjectSchema]), where: RoadmapGoalWhereUniqueInputObjectSchema }).strict();