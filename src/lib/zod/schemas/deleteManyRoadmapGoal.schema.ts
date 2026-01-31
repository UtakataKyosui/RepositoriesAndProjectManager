import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './objects/RoadmapGoalWhereInput.schema';

export const RoadmapGoalDeleteManySchema: z.ZodType<Prisma.RoadmapGoalDeleteManyArgs> = z.object({ where: RoadmapGoalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalDeleteManyArgs>;

export const RoadmapGoalDeleteManyZodSchema = z.object({ where: RoadmapGoalWhereInputObjectSchema.optional() }).strict();