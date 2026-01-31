import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectOrderByWithRelationInputObjectSchema as RoadmapProjectOrderByWithRelationInputObjectSchema } from './objects/RoadmapProjectOrderByWithRelationInput.schema';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectCountAggregateInputObjectSchema as RoadmapProjectCountAggregateInputObjectSchema } from './objects/RoadmapProjectCountAggregateInput.schema';

export const RoadmapProjectCountSchema: z.ZodType<Prisma.RoadmapProjectCountArgs> = z.object({ orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapProjectCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectCountArgs>;

export const RoadmapProjectCountZodSchema = z.object({ orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoadmapProjectCountAggregateInputObjectSchema ]).optional() }).strict();