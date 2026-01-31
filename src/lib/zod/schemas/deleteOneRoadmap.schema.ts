import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './objects/RoadmapInclude.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';

export const RoadmapDeleteOneSchema: z.ZodType<Prisma.RoadmapDeleteArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), where: RoadmapWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapDeleteArgs>;

export const RoadmapDeleteOneZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), where: RoadmapWhereUniqueInputObjectSchema }).strict();