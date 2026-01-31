import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';

export const RoadmapProjectDeleteOneSchema: z.ZodType<Prisma.RoadmapProjectDeleteArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), where: RoadmapProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectDeleteArgs>;

export const RoadmapProjectDeleteOneZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), where: RoadmapProjectWhereUniqueInputObjectSchema }).strict();