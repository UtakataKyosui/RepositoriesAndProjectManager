import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';

export const RoadmapProjectDeleteManySchema: z.ZodType<Prisma.RoadmapProjectDeleteManyArgs> = z.object({ where: RoadmapProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectDeleteManyArgs>;

export const RoadmapProjectDeleteManyZodSchema = z.object({ where: RoadmapProjectWhereInputObjectSchema.optional() }).strict();