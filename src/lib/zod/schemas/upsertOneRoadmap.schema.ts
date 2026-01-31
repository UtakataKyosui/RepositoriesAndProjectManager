import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './objects/RoadmapInclude.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './objects/RoadmapWhereUniqueInput.schema';
import { RoadmapCreateInputObjectSchema as RoadmapCreateInputObjectSchema } from './objects/RoadmapCreateInput.schema';
import { RoadmapUncheckedCreateInputObjectSchema as RoadmapUncheckedCreateInputObjectSchema } from './objects/RoadmapUncheckedCreateInput.schema';
import { RoadmapUpdateInputObjectSchema as RoadmapUpdateInputObjectSchema } from './objects/RoadmapUpdateInput.schema';
import { RoadmapUncheckedUpdateInputObjectSchema as RoadmapUncheckedUpdateInputObjectSchema } from './objects/RoadmapUncheckedUpdateInput.schema';

export const RoadmapUpsertOneSchema: z.ZodType<Prisma.RoadmapUpsertArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), where: RoadmapWhereUniqueInputObjectSchema, create: z.union([ RoadmapCreateInputObjectSchema, RoadmapUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapUpdateInputObjectSchema, RoadmapUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RoadmapUpsertArgs>;

export const RoadmapUpsertOneZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), include: RoadmapIncludeObjectSchema.optional(), where: RoadmapWhereUniqueInputObjectSchema, create: z.union([ RoadmapCreateInputObjectSchema, RoadmapUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapUpdateInputObjectSchema, RoadmapUncheckedUpdateInputObjectSchema ]) }).strict();