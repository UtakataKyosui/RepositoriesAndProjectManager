import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutUserInputObjectSchema as RoadmapCreateWithoutUserInputObjectSchema } from './RoadmapCreateWithoutUserInput.schema';
import { RoadmapUncheckedCreateWithoutUserInputObjectSchema as RoadmapUncheckedCreateWithoutUserInputObjectSchema } from './RoadmapUncheckedCreateWithoutUserInput.schema';
import { RoadmapCreateOrConnectWithoutUserInputObjectSchema as RoadmapCreateOrConnectWithoutUserInputObjectSchema } from './RoadmapCreateOrConnectWithoutUserInput.schema';
import { RoadmapUpsertWithWhereUniqueWithoutUserInputObjectSchema as RoadmapUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RoadmapUpsertWithWhereUniqueWithoutUserInput.schema';
import { RoadmapCreateManyUserInputEnvelopeObjectSchema as RoadmapCreateManyUserInputEnvelopeObjectSchema } from './RoadmapCreateManyUserInputEnvelope.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapUpdateWithWhereUniqueWithoutUserInputObjectSchema as RoadmapUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RoadmapUpdateWithWhereUniqueWithoutUserInput.schema';
import { RoadmapUpdateManyWithWhereWithoutUserInputObjectSchema as RoadmapUpdateManyWithWhereWithoutUserInputObjectSchema } from './RoadmapUpdateManyWithWhereWithoutUserInput.schema';
import { RoadmapScalarWhereInputObjectSchema as RoadmapScalarWhereInputObjectSchema } from './RoadmapScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RoadmapCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoadmapWhereUniqueInputObjectSchema), z.lazy(() => RoadmapWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoadmapWhereUniqueInputObjectSchema), z.lazy(() => RoadmapWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoadmapWhereUniqueInputObjectSchema), z.lazy(() => RoadmapWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoadmapWhereUniqueInputObjectSchema), z.lazy(() => RoadmapWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoadmapScalarWhereInputObjectSchema), z.lazy(() => RoadmapScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateManyWithoutUserNestedInput>;
export const RoadmapUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
