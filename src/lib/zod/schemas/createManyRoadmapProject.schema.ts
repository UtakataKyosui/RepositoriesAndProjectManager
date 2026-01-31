import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectCreateManyInputObjectSchema as RoadmapProjectCreateManyInputObjectSchema } from './objects/RoadmapProjectCreateManyInput.schema';

export const RoadmapProjectCreateManySchema: z.ZodType<Prisma.RoadmapProjectCreateManyArgs> = z.object({ data: z.union([ RoadmapProjectCreateManyInputObjectSchema, z.array(RoadmapProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyArgs>;

export const RoadmapProjectCreateManyZodSchema = z.object({ data: z.union([ RoadmapProjectCreateManyInputObjectSchema, z.array(RoadmapProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();