import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectCreateManyInputObjectSchema as RoadmapProjectCreateManyInputObjectSchema } from './objects/RoadmapProjectCreateManyInput.schema';

export const RoadmapProjectCreateManyAndReturnSchema: z.ZodType<Prisma.RoadmapProjectCreateManyAndReturnArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), data: z.union([ RoadmapProjectCreateManyInputObjectSchema, z.array(RoadmapProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyAndReturnArgs>;

export const RoadmapProjectCreateManyAndReturnZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), data: z.union([ RoadmapProjectCreateManyInputObjectSchema, z.array(RoadmapProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();