import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapCreateWithoutProjectsInputObjectSchema as RoadmapCreateWithoutProjectsInputObjectSchema } from './RoadmapCreateWithoutProjectsInput.schema';
import { RoadmapUncheckedCreateWithoutProjectsInputObjectSchema as RoadmapUncheckedCreateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedCreateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapCreateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputObjectSchema)])
}).strict();
export const RoadmapCreateOrConnectWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateOrConnectWithoutProjectsInput>;
export const RoadmapCreateOrConnectWithoutProjectsInputObjectZodSchema = makeSchema();
