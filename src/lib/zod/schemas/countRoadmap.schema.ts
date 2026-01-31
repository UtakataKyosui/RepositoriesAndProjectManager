import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapOrderByWithRelationInputObjectSchema as RoadmapOrderByWithRelationInputObjectSchema } from './objects/RoadmapOrderByWithRelationInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';
import { RoadmapCountAggregateInputObjectSchema as RoadmapCountAggregateInputObjectSchema } from './objects/RoadmapCountAggregateInput.schema';

export const RoadmapCountSchema: z.ZodType<Prisma.RoadmapCountArgs> = z.object({ orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapCountArgs>;

export const RoadmapCountZodSchema = z.object({ orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional() }).strict();