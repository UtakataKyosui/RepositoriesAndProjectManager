import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithoutRoadmapInputObjectSchema as RoadmapProjectUpdateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUpdateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedUpdateWithoutRoadmapInput.schema';
import { RoadmapProjectCreateWithoutRoadmapInputObjectSchema as RoadmapProjectCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInput>;
export const RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputObjectZodSchema = makeSchema();
