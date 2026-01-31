import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutGoalsInputObjectSchema as RoadmapCreateWithoutGoalsInputObjectSchema } from './RoadmapCreateWithoutGoalsInput.schema';
import { RoadmapUncheckedCreateWithoutGoalsInputObjectSchema as RoadmapUncheckedCreateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedCreateWithoutGoalsInput.schema';
import { RoadmapCreateOrConnectWithoutGoalsInputObjectSchema as RoadmapCreateOrConnectWithoutGoalsInputObjectSchema } from './RoadmapCreateOrConnectWithoutGoalsInput.schema';
import { RoadmapUpsertWithoutGoalsInputObjectSchema as RoadmapUpsertWithoutGoalsInputObjectSchema } from './RoadmapUpsertWithoutGoalsInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapUpdateToOneWithWhereWithoutGoalsInputObjectSchema as RoadmapUpdateToOneWithWhereWithoutGoalsInputObjectSchema } from './RoadmapUpdateToOneWithWhereWithoutGoalsInput.schema';
import { RoadmapUpdateWithoutGoalsInputObjectSchema as RoadmapUpdateWithoutGoalsInputObjectSchema } from './RoadmapUpdateWithoutGoalsInput.schema';
import { RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema as RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutGoalsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoadmapCreateOrConnectWithoutGoalsInputObjectSchema).optional(),
  upsert: z.lazy(() => RoadmapUpsertWithoutGoalsInputObjectSchema).optional(),
  connect: z.lazy(() => RoadmapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoadmapUpdateToOneWithWhereWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUpdateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputObjectSchema)]).optional()
}).strict();
export const RoadmapUpdateOneRequiredWithoutGoalsNestedInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutGoalsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutGoalsNestedInput>;
export const RoadmapUpdateOneRequiredWithoutGoalsNestedInputObjectZodSchema = makeSchema();
