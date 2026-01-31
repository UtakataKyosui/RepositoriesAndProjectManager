import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapUpdateWithoutProjectsInputObjectSchema as RoadmapUpdateWithoutProjectsInputObjectSchema } from './RoadmapUpdateWithoutProjectsInput.schema';
import { RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema as RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutProjectsInput.schema';
import { RoadmapCreateWithoutProjectsInputObjectSchema as RoadmapCreateWithoutProjectsInputObjectSchema } from './RoadmapCreateWithoutProjectsInput.schema';
import { RoadmapUncheckedCreateWithoutProjectsInputObjectSchema as RoadmapUncheckedCreateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedCreateWithoutProjectsInput.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoadmapUpdateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema)]),
  create: z.union([z.lazy(() => RoadmapCreateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputObjectSchema)]),
  where: z.lazy(() => RoadmapWhereInputObjectSchema).optional()
}).strict();
export const RoadmapUpsertWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapUpsertWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpsertWithoutProjectsInput>;
export const RoadmapUpsertWithoutProjectsInputObjectZodSchema = makeSchema();
