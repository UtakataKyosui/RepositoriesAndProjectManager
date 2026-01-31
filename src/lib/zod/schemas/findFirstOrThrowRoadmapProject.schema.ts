import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectOrderByWithRelationInputObjectSchema as RoadmapProjectOrderByWithRelationInputObjectSchema } from './objects/RoadmapProjectOrderByWithRelationInput.schema';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectScalarFieldEnumSchema } from './enums/RoadmapProjectScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoadmapProjectFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RoadmapProjectSelect> = z.object({
    id: z.boolean().optional(),
    order: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectSelect>;

export const RoadmapProjectFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    order: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict();

export const RoadmapProjectFindFirstOrThrowSchema: z.ZodType<Prisma.RoadmapProjectFindFirstOrThrowArgs> = z.object({ select: RoadmapProjectFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoadmapProjectIncludeObjectSchema.optional()), orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapProjectScalarFieldEnumSchema, RoadmapProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectFindFirstOrThrowArgs>;

export const RoadmapProjectFindFirstOrThrowZodSchema = z.object({ select: RoadmapProjectFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoadmapProjectIncludeObjectSchema.optional()), orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapProjectScalarFieldEnumSchema, RoadmapProjectScalarFieldEnumSchema.array()]).optional() }).strict();