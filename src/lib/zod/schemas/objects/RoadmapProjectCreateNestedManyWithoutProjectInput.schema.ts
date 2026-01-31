import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateWithoutProjectInputObjectSchema as RoadmapProjectCreateWithoutProjectInputObjectSchema } from './RoadmapProjectCreateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutProjectInput.schema';
import { RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema as RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema } from './RoadmapProjectCreateOrConnectWithoutProjectInput.schema';
import { RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema as RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema } from './RoadmapProjectCreateManyProjectInputEnvelope.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapProjectCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutProjectInput>;
export const RoadmapProjectCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
