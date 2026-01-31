import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapCreateManyInputObjectSchema as RoadmapCreateManyInputObjectSchema } from './objects/RoadmapCreateManyInput.schema';

export const RoadmapCreateManySchema: z.ZodType<Prisma.RoadmapCreateManyArgs> = z.object({ data: z.union([ RoadmapCreateManyInputObjectSchema, z.array(RoadmapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapCreateManyArgs>;

export const RoadmapCreateManyZodSchema = z.object({ data: z.union([ RoadmapCreateManyInputObjectSchema, z.array(RoadmapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();