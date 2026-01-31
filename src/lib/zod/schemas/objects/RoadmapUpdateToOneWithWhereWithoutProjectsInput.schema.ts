import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema';
import { RoadmapUpdateWithoutProjectsInputObjectSchema as RoadmapUpdateWithoutProjectsInputObjectSchema } from './RoadmapUpdateWithoutProjectsInput.schema';
import { RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema as RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoadmapUpdateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema)])
}).strict();
export const RoadmapUpdateToOneWithWhereWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutProjectsInput>;
export const RoadmapUpdateToOneWithWhereWithoutProjectsInputObjectZodSchema = makeSchema();
