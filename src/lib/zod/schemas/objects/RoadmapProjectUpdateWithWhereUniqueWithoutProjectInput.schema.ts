import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithoutProjectInputObjectSchema as RoadmapProjectUpdateWithoutProjectInputObjectSchema } from './RoadmapProjectUpdateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapProjectUpdateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutProjectInput>;
export const RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
