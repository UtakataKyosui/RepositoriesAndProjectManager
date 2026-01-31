import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './objects/RoadmapGoalInclude.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './objects/RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalCreateInputObjectSchema as RoadmapGoalCreateInputObjectSchema } from './objects/RoadmapGoalCreateInput.schema';
import { RoadmapGoalUncheckedCreateInputObjectSchema as RoadmapGoalUncheckedCreateInputObjectSchema } from './objects/RoadmapGoalUncheckedCreateInput.schema';
import { RoadmapGoalUpdateInputObjectSchema as RoadmapGoalUpdateInputObjectSchema } from './objects/RoadmapGoalUpdateInput.schema';
import { RoadmapGoalUncheckedUpdateInputObjectSchema as RoadmapGoalUncheckedUpdateInputObjectSchema } from './objects/RoadmapGoalUncheckedUpdateInput.schema';

export const RoadmapGoalUpsertOneSchema: z.ZodType<Prisma.RoadmapGoalUpsertArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), where: RoadmapGoalWhereUniqueInputObjectSchema, create: z.union([ RoadmapGoalCreateInputObjectSchema, RoadmapGoalUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapGoalUpdateInputObjectSchema, RoadmapGoalUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalUpsertArgs>;

export const RoadmapGoalUpsertOneZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), include: RoadmapGoalIncludeObjectSchema.optional(), where: RoadmapGoalWhereUniqueInputObjectSchema, create: z.union([ RoadmapGoalCreateInputObjectSchema, RoadmapGoalUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapGoalUpdateInputObjectSchema, RoadmapGoalUncheckedUpdateInputObjectSchema ]) }).strict();