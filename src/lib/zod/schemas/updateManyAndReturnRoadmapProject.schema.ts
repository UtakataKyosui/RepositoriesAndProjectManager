import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectUpdateManyMutationInputObjectSchema as RoadmapProjectUpdateManyMutationInputObjectSchema } from './objects/RoadmapProjectUpdateManyMutationInput.schema';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './objects/RoadmapProjectWhereInput.schema';

export const RoadmapProjectUpdateManyAndReturnSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyAndReturnArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), data: RoadmapProjectUpdateManyMutationInputObjectSchema, where: RoadmapProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateManyAndReturnArgs>;

export const RoadmapProjectUpdateManyAndReturnZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), data: RoadmapProjectUpdateManyMutationInputObjectSchema, where: RoadmapProjectWhereInputObjectSchema.optional() }).strict();