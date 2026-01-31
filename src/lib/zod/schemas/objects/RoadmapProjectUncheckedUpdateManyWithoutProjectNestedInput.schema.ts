import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateWithoutProjectInputObjectSchema as RoadmapProjectCreateWithoutProjectInputObjectSchema } from './RoadmapProjectCreateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutProjectInput.schema';
import { RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema as RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema } from './RoadmapProjectCreateOrConnectWithoutProjectInput.schema';
import { RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectSchema as RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './RoadmapProjectUpsertWithWhereUniqueWithoutProjectInput.schema';
import { RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema as RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema } from './RoadmapProjectCreateManyProjectInputEnvelope.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectSchema as RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './RoadmapProjectUpdateWithWhereUniqueWithoutProjectInput.schema';
import { RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectSchema as RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectSchema } from './RoadmapProjectUpdateManyWithWhereWithoutProjectInput.schema';
import { RoadmapProjectScalarWhereInputObjectSchema as RoadmapProjectScalarWhereInputObjectSchema } from './RoadmapProjectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInput>;
export const RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
