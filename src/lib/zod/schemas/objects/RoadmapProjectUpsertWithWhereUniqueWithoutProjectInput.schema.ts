import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereUniqueInputObjectSchema as RoadmapProjectWhereUniqueInputObjectSchema } from './RoadmapProjectWhereUniqueInput.schema';
import { RoadmapProjectUpdateWithoutProjectInputObjectSchema as RoadmapProjectUpdateWithoutProjectInputObjectSchema } from './RoadmapProjectUpdateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedUpdateWithoutProjectInput.schema';
import { RoadmapProjectCreateWithoutProjectInputObjectSchema as RoadmapProjectCreateWithoutProjectInputObjectSchema } from './RoadmapProjectCreateWithoutProjectInput.schema';
import { RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema as RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoadmapProjectUpdateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapProjectCreateWithoutProjectInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutProjectInput>;
export const RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
