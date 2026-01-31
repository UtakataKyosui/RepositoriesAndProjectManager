import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './objects/RoadmapInclude.schema';
import { RoadmapOrderByWithRelationInputObjectSchema as RoadmapOrderByWithRelationInputObjectSchema } from './objects/RoadmapOrderByWithRelationInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';
import { RoadmapScalarFieldEnumSchema } from './enums/RoadmapScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoadmapFindFirstSelectSchema: z.ZodType<Prisma.RoadmapSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    published: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    goals: z.boolean().optional(),
    projects: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoadmapSelect>;

export const RoadmapFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    published: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    goals: z.boolean().optional(),
    projects: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RoadmapFindFirstSchema: z.ZodType<Prisma.RoadmapFindFirstArgs> = z.object({ select: RoadmapFindFirstSelectSchema.optional(), include: z.lazy(() => RoadmapIncludeObjectSchema.optional()), orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapScalarFieldEnumSchema, RoadmapScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapFindFirstArgs>;

export const RoadmapFindFirstZodSchema = z.object({ select: RoadmapFindFirstSelectSchema.optional(), include: z.lazy(() => RoadmapIncludeObjectSchema.optional()), orderBy: z.union([RoadmapOrderByWithRelationInputObjectSchema, RoadmapOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapWhereInputObjectSchema.optional(), cursor: RoadmapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapScalarFieldEnumSchema, RoadmapScalarFieldEnumSchema.array()]).optional() }).strict();