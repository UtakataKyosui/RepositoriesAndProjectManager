import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateWithoutRoadmapInputObjectSchema as RoadmapProjectCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutRoadmapInput.schema';
import { RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema as RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateOrConnectWithoutRoadmapInput.schema';
import { RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema as RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema } from './RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInput.schema';
import { RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema as RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema } from './RoadmapProjectCreateManyRoadmapInputEnvelope.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema as RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema } from './RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInput.schema';
import { RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectSchema as RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectSchema } from './RoadmapProjectUpdateManyWithWhereWithoutRoadmapInput.schema';
import { RoadmapProjectScalarWhereInputObjectSchema as RoadmapProjectScalarWhereInputObjectSchema } from './RoadmapProjectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema).array(), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapProjectUpdateManyWithoutRoadmapNestedInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithoutRoadmapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateManyWithoutRoadmapNestedInput>;
export const RoadmapProjectUpdateManyWithoutRoadmapNestedInputObjectZodSchema = makeSchema();
