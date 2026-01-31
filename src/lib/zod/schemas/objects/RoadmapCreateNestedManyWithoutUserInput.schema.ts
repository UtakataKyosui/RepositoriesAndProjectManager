import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutUserInputObjectSchema as RoadmapCreateWithoutUserInputObjectSchema } from './RoadmapCreateWithoutUserInput.schema';
import { RoadmapUncheckedCreateWithoutUserInputObjectSchema as RoadmapUncheckedCreateWithoutUserInputObjectSchema } from './RoadmapUncheckedCreateWithoutUserInput.schema';
import { RoadmapCreateOrConnectWithoutUserInputObjectSchema as RoadmapCreateOrConnectWithoutUserInputObjectSchema } from './RoadmapCreateOrConnectWithoutUserInput.schema';
import { RoadmapCreateManyUserInputEnvelopeObjectSchema as RoadmapCreateManyUserInputEnvelopeObjectSchema } from './RoadmapCreateManyUserInputEnvelope.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RoadmapCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoadmapWhereUniqueInputObjectSchema), z.lazy(() => RoadmapWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateNestedManyWithoutUserInput>;
export const RoadmapCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
