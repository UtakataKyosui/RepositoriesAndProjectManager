import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithoutRoadmapInputObjectSchema as RoadmapProjectUpdateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUpdateWithoutRoadmapInput.schema';
import { RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedUpdateWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInput>;
export const RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputObjectZodSchema = makeSchema();
