import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalUpdateWithoutRoadmapInputObjectSchema as RoadmapGoalUpdateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUpdateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedUpdateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInput>;
export const RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectZodSchema = makeSchema();
