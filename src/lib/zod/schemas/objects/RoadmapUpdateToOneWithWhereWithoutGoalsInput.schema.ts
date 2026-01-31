import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema';
import { RoadmapUpdateWithoutGoalsInputObjectSchema as RoadmapUpdateWithoutGoalsInputObjectSchema } from './RoadmapUpdateWithoutGoalsInput.schema';
import { RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema as RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutGoalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoadmapUpdateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema)])
}).strict();
export const RoadmapUpdateToOneWithWhereWithoutGoalsInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutGoalsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutGoalsInput>;
export const RoadmapUpdateToOneWithWhereWithoutGoalsInputObjectZodSchema = makeSchema();
