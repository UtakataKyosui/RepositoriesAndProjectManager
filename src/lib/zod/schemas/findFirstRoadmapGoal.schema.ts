import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './objects/RoadmapGoalInclude.schema';
import { RoadmapGoalOrderByWithRelationInputObjectSchema as RoadmapGoalOrderByWithRelationInputObjectSchema } from './objects/RoadmapGoalOrderByWithRelationInput.schema';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './objects/RoadmapGoalWhereInput.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './objects/RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalScalarFieldEnumSchema } from './enums/RoadmapGoalScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoadmapGoalFindFirstSelectSchema: z.ZodType<Prisma.RoadmapGoalSelect> = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalSelect>;

export const RoadmapGoalFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional()
  }).strict();

export const RoadmapGoalFindFirstSchema: z.ZodType<Prisma.RoadmapGoalFindFirstArgs> = z.object({ select: RoadmapGoalFindFirstSelectSchema.optional(), include: z.lazy(() => RoadmapGoalIncludeObjectSchema.optional()), orderBy: z.union([RoadmapGoalOrderByWithRelationInputObjectSchema, RoadmapGoalOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapGoalWhereInputObjectSchema.optional(), cursor: RoadmapGoalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapGoalScalarFieldEnumSchema, RoadmapGoalScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapGoalFindFirstArgs>;

export const RoadmapGoalFindFirstZodSchema = z.object({ select: RoadmapGoalFindFirstSelectSchema.optional(), include: z.lazy(() => RoadmapGoalIncludeObjectSchema.optional()), orderBy: z.union([RoadmapGoalOrderByWithRelationInputObjectSchema, RoadmapGoalOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapGoalWhereInputObjectSchema.optional(), cursor: RoadmapGoalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapGoalScalarFieldEnumSchema, RoadmapGoalScalarFieldEnumSchema.array()]).optional() }).strict();