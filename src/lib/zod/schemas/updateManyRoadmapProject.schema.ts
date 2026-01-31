import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectUpdateManyMutationInputObjectSchema as RoadmapProjectUpdateManyMutationInputObjectSchema } from './objects/RoadmapProjectUpdateManyMutationInput.schema';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';

export const RoadmapProjectUpdateManySchema: z.ZodType<Prisma.RoadmapProjectUpdateManyArgs> = z.object({ data: RoadmapProjectUpdateManyMutationInputObjectSchema, where: RoadmapProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateManyArgs>;

export const RoadmapProjectUpdateManyZodSchema = z.object({ data: RoadmapProjectUpdateManyMutationInputObjectSchema, where: RoadmapProjectWhereInputObjectSchema.optional() }).strict();