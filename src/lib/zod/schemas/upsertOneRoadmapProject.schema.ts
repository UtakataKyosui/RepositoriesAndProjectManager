import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectCreateInputObjectSchema as RoadmapProjectCreateInputObjectSchema } from './objects/RoadmapProjectCreateInput.schema';
import { RoadmapProjectUncheckedCreateInputObjectSchema as RoadmapProjectUncheckedCreateInputObjectSchema } from './objects/RoadmapProjectUncheckedCreateInput.schema';
import { RoadmapProjectUpdateInputObjectSchema as RoadmapProjectUpdateInputObjectSchema } from './objects/RoadmapProjectUpdateInput.schema';
import { RoadmapProjectUncheckedUpdateInputObjectSchema as RoadmapProjectUncheckedUpdateInputObjectSchema } from './objects/RoadmapProjectUncheckedUpdateInput.schema';

export const RoadmapProjectUpsertOneSchema: z.ZodType<Prisma.RoadmapProjectUpsertArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), where: RoadmapProjectWhereUniqueInputObjectSchema, create: z.union([ RoadmapProjectCreateInputObjectSchema, RoadmapProjectUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapProjectUpdateInputObjectSchema, RoadmapProjectUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectUpsertArgs>;

export const RoadmapProjectUpsertOneZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), where: RoadmapProjectWhereUniqueInputObjectSchema, create: z.union([ RoadmapProjectCreateInputObjectSchema, RoadmapProjectUncheckedCreateInputObjectSchema ]), update: z.union([ RoadmapProjectUpdateInputObjectSchema, RoadmapProjectUncheckedUpdateInputObjectSchema ]) }).strict();