import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectOrderByWithRelationInputObjectSchema as RoadmapProjectOrderByWithRelationInputObjectSchema } from './objects/RoadmapProjectOrderByWithRelationInput.schema';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectScalarFieldEnumSchema } from './enums/RoadmapProjectScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoadmapProjectFindManySelectSchema: z.ZodType<Prisma.RoadmapProjectSelect> = z.object({
    id: z.boolean().optional(),
    order: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectSelect>;

export const RoadmapProjectFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    order: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict();

export const RoadmapProjectFindManySchema: z.ZodType<Prisma.RoadmapProjectFindManyArgs> = z.object({ select: RoadmapProjectFindManySelectSchema.optional(), include: z.lazy(() => RoadmapProjectIncludeObjectSchema.optional()), orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapProjectScalarFieldEnumSchema, RoadmapProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectFindManyArgs>;

export const RoadmapProjectFindManyZodSchema = z.object({ select: RoadmapProjectFindManySelectSchema.optional(), include: z.lazy(() => RoadmapProjectIncludeObjectSchema.optional()), orderBy: z.union([RoadmapProjectOrderByWithRelationInputObjectSchema, RoadmapProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoadmapProjectWhereInputObjectSchema.optional(), cursor: RoadmapProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoadmapProjectScalarFieldEnumSchema, RoadmapProjectScalarFieldEnumSchema.array()]).optional() }).strict();