import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalOrderByWithRelationInputObjectSchema as RoadmapGoalOrderByWithRelationInputObjectSchema } from './objects/RoadmapGoalOrderByWithRelationInput.schema';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './objects/RoadmapGoalWhereInput.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './objects/RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalCountAggregateInputObjectSchema as RoadmapGoalCountAggregateInputObjectSchema } from './objects/RoadmapGoalCountAggregateInput.schema';

export const RoadmapGoalCountSchema: z.ZodType<Prisma.RoadmapGoalCountArgs> = z.object({ orderBy: z.union([RoadmapGoalOrderByWithRelationInputObjectSchema, RoadmapGoalOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapGoalWhereInputObjectSchema.optional(), cursor: RoadmapGoalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapGoalCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalCountArgs>;

export const RoadmapGoalCountZodSchema = z.object({ orderBy: z.union([RoadmapGoalOrderByWithRelationInputObjectSchema, RoadmapGoalOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapGoalWhereInputObjectSchema.optional(), cursor: RoadmapGoalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapGoalCountAggregateInputObjectSchema ]).optional() }).strict();