import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectUpdateInputObjectSchema as RoadmapProjectUpdateInputObjectSchema } from './objects/RoadmapProjectUpdateInput.schema';
import { RoadmapProjectUncheckedUpdateInputObjectSchema as RoadmapProjectUncheckedUpdateInputObjectSchema } from './objects/RoadmapProjectUncheckedUpdateInput.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './objects/RoadmapProjectWhereUniqueInput.schema';

export const RoadmapProjectUpdateOneSchema: z.ZodType<Prisma.RoadmapProjectUpdateArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), data: z.union([RoadmapProjectUpdateInputObjectSchema, RoadmapProjectUncheckedUpdateInputObjectSchema]), where: RoadmapProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateArgs>;

export const RoadmapProjectUpdateOneZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), data: z.union([RoadmapProjectUpdateInputObjectSchema, RoadmapProjectUncheckedUpdateInputObjectSchema]), where: RoadmapProjectWhereUniqueInputObjectSchema }).strict();