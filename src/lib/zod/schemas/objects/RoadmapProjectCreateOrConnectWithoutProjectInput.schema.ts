import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectCreateWithoutProjectInputObjectSchema as RoadmapProjectCreateWithoutProjectInputObjectSchema } from './RoadmapProjectCreateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const RoadmapProjectCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutProjectInput>;
export const RoadmapProjectCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
