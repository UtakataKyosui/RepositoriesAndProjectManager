import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalSelectObjectSchema as RoadmapGoalSelectObjectSchema } from './RoadmapGoalSelect.schema';
import { RoadmapGoalIncludeObjectSchema as RoadmapGoalIncludeObjectSchema } from './RoadmapGoalInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoadmapGoalSelectObjectSchema).optional(),
  include: z.lazy(() => RoadmapGoalIncludeObjectSchema).optional()
}).strict();
export const RoadmapGoalArgsObjectSchema = makeSchema();
export const RoadmapGoalArgsObjectZodSchema = makeSchema();
