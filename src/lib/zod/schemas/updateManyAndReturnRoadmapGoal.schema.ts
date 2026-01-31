import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './objects/RoadmapGoalSelect.schema';
import { RoadmapGoalUpdateManyMutationInputObjectSchema as RoadmapGoalUpdateManyMutationInputObjectSchema } from './objects/RoadmapGoalUpdateManyMutationInput.schema';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './objects/RoadmapGoalWhereInput.schema';

export const RoadmapGoalUpdateManyAndReturnSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyAndReturnArgs> = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), data: RoadmapGoalUpdateManyMutationInputObjectSchema, where: RoadmapGoalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateManyAndReturnArgs>;

export const RoadmapGoalUpdateManyAndReturnZodSchema = z.object({ select: RoadmapGoalSelectObjectSchema.optional(), data: RoadmapGoalUpdateManyMutationInputObjectSchema, where: RoadmapGoalWhereInputObjectSchema.optional() }).strict();