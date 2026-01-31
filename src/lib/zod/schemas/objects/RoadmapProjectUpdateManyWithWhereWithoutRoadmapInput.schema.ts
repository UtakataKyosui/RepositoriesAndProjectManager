import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectScalarWhereInputObjectSchema as RoadmapProjectScalarWhereInputObjectSchema } from './RoadmapProjectScalarWhereInput.schema';
import { RoadmapProjectUpdateManyMutationInputObjectSchema as RoadmapProjectUpdateManyMutationInputObjectSchema } from './RoadmapProjectUpdateManyMutationInput.schema';
import { RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedUpdateManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapProjectUpdateManyMutationInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutRoadmapInput>;
export const RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputObjectZodSchema = makeSchema();
