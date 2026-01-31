import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalCreateWithoutRoadmapInputObjectSchema as RoadmapGoalCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedCreateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateOrConnectWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateOrConnectWithoutRoadmapInput>;
export const RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectZodSchema = makeSchema();
