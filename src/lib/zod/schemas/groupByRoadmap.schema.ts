import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';
import { RoadmapOrderByWithAggregationInputObjectSchema as RoadmapOrderByWithAggregationInputObjectSchema } from './objects/RoadmapOrderByWithAggregationInput.schema';
import { RoadmapScalarWhereWithAggregatesInputObjectSchema as RoadmapScalarWhereWithAggregatesInputObjectSchema } from './objects/RoadmapScalarWhereWithAggregatesInput.schema';
import { RoadmapScalarFieldEnumSchema } from './enums/RoadmapScalarFieldEnum.schema';
import { RoadmapCountAggregateInputObjectSchema as RoadmapCountAggregateInputObjectSchema } from './objects/RoadmapCountAggregateInput.schema';
import { RoadmapMinAggregateInputObjectSchema as RoadmapMinAggregateInputObjectSchema } from './objects/RoadmapMinAggregateInput.schema';
import { RoadmapMaxAggregateInputObjectSchema as RoadmapMaxAggregateInputObjectSchema } from './objects/RoadmapMaxAggregateInput.schema';

export const RoadmapGroupBySchema: z.ZodType<Prisma.RoadmapGroupByArgs> = z.object({ where: RoadmapWhereInputObjectSchema.optional(), orderBy: z.union([RoadmapOrderByWithAggregationInputObjectSchema, RoadmapOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RoadmapScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RoadmapScalarFieldEnumSchema), _count: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional(), _min: RoadmapMinAggregateInputObjectSchema.optional(), _max: RoadmapMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGroupByArgs>;

export const RoadmapGroupByZodSchema = z.object({ where: RoadmapWhereInputObjectSchema.optional(), orderBy: z.union([RoadmapOrderByWithAggregationInputObjectSchema, RoadmapOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RoadmapScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RoadmapScalarFieldEnumSchema), _count: z.union([ z.literal(true), RoadmapCountAggregateInputObjectSchema ]).optional(), _min: RoadmapMinAggregateInputObjectSchema.optional(), _max: RoadmapMaxAggregateInputObjectSchema.optional() }).strict();