import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapUpdateManyMutationInputObjectSchema as RoadmapUpdateManyMutationInputObjectSchema } from './objects/RoadmapUpdateManyMutationInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';

export const RoadmapUpdateManySchema: z.ZodType<Prisma.RoadmapUpdateManyArgs> = z.object({ data: RoadmapUpdateManyMutationInputObjectSchema, where: RoadmapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapUpdateManyArgs>;

export const RoadmapUpdateManyZodSchema = z.object({ data: RoadmapUpdateManyMutationInputObjectSchema, where: RoadmapWhereInputObjectSchema.optional() }).strict();