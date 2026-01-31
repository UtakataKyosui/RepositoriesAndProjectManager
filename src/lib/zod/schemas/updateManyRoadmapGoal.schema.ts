import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalUpdateManyMutationInputObjectSchema as RoadmapGoalUpdateManyMutationInputObjectSchema } from './objects/RoadmapGoalUpdateManyMutationInput.schema';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './objects/RoadmapGoalWhereInput.schema';

export const RoadmapGoalUpdateManySchema: z.ZodType<Prisma.RoadmapGoalUpdateManyArgs> = z.object({ data: RoadmapGoalUpdateManyMutationInputObjectSchema, where: RoadmapGoalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateManyArgs>;

export const RoadmapGoalUpdateManyZodSchema = z.object({ data: RoadmapGoalUpdateManyMutationInputObjectSchema, where: RoadmapGoalWhereInputObjectSchema.optional() }).strict();