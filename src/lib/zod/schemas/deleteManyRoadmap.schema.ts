import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';

export const RoadmapDeleteManySchema: z.ZodType<Prisma.RoadmapDeleteManyArgs> = z.object({ where: RoadmapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapDeleteManyArgs>;

export const RoadmapDeleteManyZodSchema = z.object({ where: RoadmapWhereInputObjectSchema.optional() }).strict();