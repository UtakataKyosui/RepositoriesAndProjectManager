import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectCreateWithoutRoadmapInputObjectSchema as RoadmapProjectCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutRoadmapInput>;
export const RoadmapProjectCreateOrConnectWithoutRoadmapInputObjectZodSchema = makeSchema();
