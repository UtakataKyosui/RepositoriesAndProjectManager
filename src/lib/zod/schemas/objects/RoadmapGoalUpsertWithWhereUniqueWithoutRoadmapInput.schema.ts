import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalUpdateWithoutRoadmapInputObjectSchema as RoadmapGoalUpdateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUpdateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedUpdateWithoutRoadmapInput.schema';
import { RoadmapGoalCreateWithoutRoadmapInputObjectSchema as RoadmapGoalCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedCreateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInput>;
export const RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectZodSchema = makeSchema();
