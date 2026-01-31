import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutProjectsInputObjectSchema as RoadmapCreateWithoutProjectsInputObjectSchema } from './RoadmapCreateWithoutProjectsInput.schema';
import { RoadmapUncheckedCreateWithoutProjectsInputObjectSchema as RoadmapUncheckedCreateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedCreateWithoutProjectsInput.schema';
import { RoadmapCreateOrConnectWithoutProjectsInputObjectSchema as RoadmapCreateOrConnectWithoutProjectsInputObjectSchema } from './RoadmapCreateOrConnectWithoutProjectsInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoadmapCreateOrConnectWithoutProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => RoadmapWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoadmapCreateNestedOneWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateNestedOneWithoutProjectsInput>;
export const RoadmapCreateNestedOneWithoutProjectsInputObjectZodSchema = makeSchema();
