import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalCreateWithoutRoadmapInputObjectSchema as RoadmapGoalCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateWithoutRoadmapInput.schema';
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedCreateWithoutRoadmapInput.schema';
import { RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema as RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateOrConnectWithoutRoadmapInput.schema';
import { RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema as RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema } from './RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInput.schema';
import { RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema as RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema } from './RoadmapGoalCreateManyRoadmapInputEnvelope.schema';
import { RoadmapGoalWhereUniqueInputObjectSchema as RoadmapGoalWhereUniqueInputObjectSchema } from './RoadmapGoalWhereUniqueInput.schema';
import { RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema as RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema } from './RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInput.schema';
import { RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectSchema as RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectSchema } from './RoadmapGoalUpdateManyWithWhereWithoutRoadmapInput.schema';
import { RoadmapGoalScalarWhereInputObjectSchema as RoadmapGoalScalarWhereInputObjectSchema } from './RoadmapGoalScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputObjectSchema).array(), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema), z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema), z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema), z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema), z.lazy(() => RoadmapGoalWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema), z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapGoalUpdateManyWithoutRoadmapNestedInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyWithoutRoadmapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateManyWithoutRoadmapNestedInput>;
export const RoadmapGoalUpdateManyWithoutRoadmapNestedInputObjectZodSchema = makeSchema();
