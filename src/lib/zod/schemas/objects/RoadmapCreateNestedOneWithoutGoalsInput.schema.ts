import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutGoalsInputObjectSchema as RoadmapCreateWithoutGoalsInputObjectSchema } from './RoadmapCreateWithoutGoalsInput.schema';
import { RoadmapUncheckedCreateWithoutGoalsInputObjectSchema as RoadmapUncheckedCreateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedCreateWithoutGoalsInput.schema';
import { RoadmapCreateOrConnectWithoutGoalsInputObjectSchema as RoadmapCreateOrConnectWithoutGoalsInputObjectSchema } from './RoadmapCreateOrConnectWithoutGoalsInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoadmapCreateOrConnectWithoutGoalsInputObjectSchema).optional(),
  connect: z.lazy(() => RoadmapWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoadmapCreateNestedOneWithoutGoalsInputObjectSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutGoalsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateNestedOneWithoutGoalsInput>;
export const RoadmapCreateNestedOneWithoutGoalsInputObjectZodSchema = makeSchema();
