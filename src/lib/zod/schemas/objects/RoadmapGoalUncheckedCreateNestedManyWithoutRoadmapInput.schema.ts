import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalCreateWithoutRoadmapInputObjectSchema as RoadmapGoalCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedCreateWithoutRoadmapInput.schema';
import { RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema as RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateOrConnectWithoutRoadmapInput.schema';
import { RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema as RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema } from './RoadmapGoalCreateManyRoadmapInputEnvelope.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './RoadmapGoalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema).array(), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema), z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInput>;
export const RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputObjectZodSchema = makeSchema();
