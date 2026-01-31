import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoadmapGoalFindManySchema as RoadmapGoalFindManySchema } from '../findManyRoadmapGoal.schema';
import { RoadmapProjectFindManySchema as RoadmapProjectFindManySchema } from '../findManyRoadmapProject.schema';
import { RoadmapCountOutputTypeArgsObjectSchema as RoadmapCountOutputTypeArgsObjectSchema } from './RoadmapCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  goals: z.union([z.boolean(), z.lazy(() => RoadmapGoalFindManySchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => RoadmapProjectFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoadmapIncludeObjectSchema: z.ZodType<Prisma.RoadmapInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapInclude>;
export const RoadmapIncludeObjectZodSchema = makeSchema();
