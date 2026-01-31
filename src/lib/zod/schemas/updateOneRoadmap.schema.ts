import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './objects/RoadmapInclude.schema';
import { RoadmapUpdateInputObjectSchema as RoadmapUpdateInputObjectSchema } from './objects/RoadmapUpdateInput.schema';
import { RoadmapUncheckedUpdateInputObjectSchema as RoadmapUncheckedUpdateInputObjectSchema } from './objects/RoadmapUncheckedUpdateInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';

export const RoadmapUpdateOneSchema: z.ZodType<Prisma.RoadmapUpdateArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), data: z.union([RoadmapUpdateInputObjectSchema, RoadmapUncheckedUpdateInputObjectSchema]), where: RoadmapWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapUpdateArgs>;

export const RoadmapUpdateOneZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), data: z.union([RoadmapUpdateInputObjectSchema, RoadmapUncheckedUpdateInputObjectSchema]), where: RoadmapWhereUniqueInputObjectSchema }).strict();