import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapUpdateWithoutUserInputObjectSchema as RoadmapUpdateWithoutUserInputObjectSchema } from './RoadmapUpdateWithoutUserInput.schema';
import { RoadmapUncheckedUpdateWithoutUserInputObjectSchema as RoadmapUncheckedUpdateWithoutUserInputObjectSchema } from './RoadmapUncheckedUpdateWithoutUserInput.schema';
import { RoadmapCreateWithoutUserInputObjectSchema as RoadmapCreateWithoutUserInputObjectSchema } from './RoadmapCreateWithoutUserInput.schema';
import { RoadmapUncheckedCreateWithoutUserInputObjectSchema as RoadmapUncheckedCreateWithoutUserInputObjectSchema } from './RoadmapUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoadmapUpdateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RoadmapUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpsertWithWhereUniqueWithoutUserInput>;
export const RoadmapUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
