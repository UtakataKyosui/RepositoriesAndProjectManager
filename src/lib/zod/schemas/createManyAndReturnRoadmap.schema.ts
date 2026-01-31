import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapCreateManyInputObjectSchema as RoadmapCreateManyInputObjectSchema } from './objects/RoadmapCreateManyInput.schema';

export const RoadmapCreateManyAndReturnSchema: z.ZodType<Prisma.RoadmapCreateManyAndReturnArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), data: z.union([ RoadmapCreateManyInputObjectSchema, z.array(RoadmapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapCreateManyAndReturnArgs>;

export const RoadmapCreateManyAndReturnZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), data: z.union([ RoadmapCreateManyInputObjectSchema, z.array(RoadmapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();