import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './objects/RoadmapSelect.schema';
import { RoadmapUpdateManyMutationInputObjectSchema as RoadmapUpdateManyMutationInputObjectSchema } from './objects/RoadmapUpdateManyMutationInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './objects/RoadmapWhereInput.schema';

export const RoadmapUpdateManyAndReturnSchema: z.ZodType<Prisma.RoadmapUpdateManyAndReturnArgs> = z.object({ select: RoadmapSelectObjectSchema.optional(), data: RoadmapUpdateManyMutationInputObjectSchema, where: RoadmapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoadmapUpdateManyAndReturnArgs>;

export const RoadmapUpdateManyAndReturnZodSchema = z.object({ select: RoadmapSelectObjectSchema.optional(), data: RoadmapUpdateManyMutationInputObjectSchema, where: RoadmapWhereInputObjectSchema.optional() }).strict();