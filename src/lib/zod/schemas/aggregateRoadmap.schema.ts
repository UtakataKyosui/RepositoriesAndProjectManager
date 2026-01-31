import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapOrderByWithRelationInputObjectSchema as RoadmapOrderByWithRelationInputObjectSchema } from './objects/RoadmapOrderByWithRelationInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';
import { RoadmapCountAggregateInputObjectSchema as RoadmapCountAggregateInputObjectSchema } from './objects/RoadmapCountAggregateInput.schema';
import { RoadmapMinAggregateInputObjectSchema as RoadmapMinAggregateInputObjectSchema } from './objects/RoadmapMinAggregateInput.schema';
import { RoadmapMaxAggregateInputObjectSchema as RoadmapMaxAggregateInputObjectSchema } from './objects/RoadmapMaxAggregateInput.schema';

export const RoadmapAggregateSchema: z.ZodType<Prisma.RoadmapAggregateArgs> = z.object({ orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional(), _min: RoadmapMinAggregateInputObjectSchema.optional(), _max: RoadmapMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapAggregateArgs>;

export const RoadmapAggregateZodSchema = z.object({ orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional(), _min: RoadmapMinAggregateInputObjectSchema.optional(), _max: RoadmapMaxAggregateInputObjectSchema.optional() }).strict();