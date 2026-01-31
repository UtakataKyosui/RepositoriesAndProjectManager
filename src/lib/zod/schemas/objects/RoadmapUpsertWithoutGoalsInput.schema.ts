import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapUpdateWithoutGoalsInputObjectSchema as RoadmapUpdateWithoutGoalsInputObjectSchema } from './RoadmapUpdateWithoutGoalsInput.schema';
import { RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema as RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutGoalsInput.schema';
import { RoadmapCreateWithoutGoalsInputObjectSchema as RoadmapCreateWithoutGoalsInputObjectSchema } from './RoadmapCreateWithoutGoalsInput.schema';
import { RoadmapUncheckedCreateWithoutGoalsInputObjectSchema as RoadmapUncheckedCreateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedCreateWithoutGoalsInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoadmapUpdateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapCreateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputObjectSchema)]),
  where: z.lazy(() => RoadmapWhereInputObjectSchema).optional()
}).strict();
export const RoadmapUpsertWithoutGoalsInputObjectSchema: z.ZodType<Prisma.RoadmapUpsertWithoutGoalsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpsertWithoutGoalsInput>;
export const RoadmapUpsertWithoutGoalsInputObjectZodSchema = makeSchema();
