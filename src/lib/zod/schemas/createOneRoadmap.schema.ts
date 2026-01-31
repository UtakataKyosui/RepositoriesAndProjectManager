import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './objects/RoadmapInclude.schema';
import { RoadmapCreateInputObjectSchema as RoadmapCreateInputObjectSchema } from './objects/RoadmapCreateInput.schema';
import { RoadmapUncheckedCreateInputObjectSchema as RoadmapUncheckedCreateInputObjectSchema } from './objects/RoadmapUncheckedCreateInput.schema';

export const RoadmapCreateOneSchema: z.ZodType<Prisma.RoadmapCreateArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), data: z.union([RoadmapCreateInputObjectSchema, RoadmapUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RoadmapCreateArgs>;

export const RoadmapCreateOneZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), data: z.union([RoadmapCreateInputObjectSchema, RoadmapUncheckedCreateInputObjectSchema]) }).strict();