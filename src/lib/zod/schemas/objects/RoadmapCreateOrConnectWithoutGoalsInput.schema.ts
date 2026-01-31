import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapCreateWithoutGoalsInputObjectSchema as RoadmapCreateWithoutGoalsInputObjectSchema } from './RoadmapCreateWithoutGoalsInput.schema';
import { RoadmapUncheckedCreateWithoutGoalsInputObjectSchema as RoadmapUncheckedCreateWithoutGoalsInputObjectSchema } from './RoadmapUncheckedCreateWithoutGoalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapCreateWithoutGoalsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputObjectSchema)])
}).strict();
export const RoadmapCreateOrConnectWithoutGoalsInputObjectSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutGoalsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateOrConnectWithoutGoalsInput>;
export const RoadmapCreateOrConnectWithoutGoalsInputObjectZodSchema = makeSchema();
