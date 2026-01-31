import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateWithoutRoadmapInputObjectSchema as RoadmapProjectCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutRoadmapInput.schema';
import { RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema as RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateOrConnectWithoutRoadmapInput.schema';
import { RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema as RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema } from './RoadmapProjectCreateManyRoadmapInputEnvelope.schema';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema).array(), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema), z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutRoadmapInput>;
export const RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectZodSchema = makeSchema();
