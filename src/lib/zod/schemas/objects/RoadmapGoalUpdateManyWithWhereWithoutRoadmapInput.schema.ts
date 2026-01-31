import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalScalarWhereInputObjectSchema as RoadmapGoalScalarWhereInputObjectSchema } from './RoadmapGoalScalarWhereInput.schema';
import { RoadmapGoalUpdateManyMutationInputObjectSchema as RoadmapGoalUpdateManyMutationInputObjectSchema } from './RoadmapGoalUpdateManyMutationInput.schema';
import { RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedUpdateManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapGoalUpdateManyMutationInputObjectSchema), z.lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputObjectSchema)])
}).strict();
export const RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyWithWhereWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalUpdateManyWithWhereWithoutRoadmapInput>;
export const RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputObjectZodSchema = makeSchema();
