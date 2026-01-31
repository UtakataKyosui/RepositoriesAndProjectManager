import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './RoadmapGoalWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapGoalWhereInputObjectSchema).optional()
}).strict();
export const RoadmapCountOutputTypeCountGoalsArgsObjectSchema = makeSchema();
export const RoadmapCountOutputTypeCountGoalsArgsObjectZodSchema = makeSchema();
