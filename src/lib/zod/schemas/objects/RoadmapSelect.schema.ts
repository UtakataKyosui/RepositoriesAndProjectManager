import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoadmapGoalFindManySchema as RoadmapGoalFindManySchema } from '../findManyRoadmapGoal.schema';
import { RoadmapProjectFindManySchema as RoadmapProjectFindManySchema } from '../findManyRoadmapProject.schema';
import { RoadmapCountOutputTypeArgsObjectSchema as RoadmapCountOutputTypeArgsObjectSchema } from './RoadmapCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  published: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  goals: z.union([z.boolean(), z.lazy(() => RoadmapGoalFindManySchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => RoadmapProjectFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoadmapSelectObjectSchema: z.ZodType<Prisma.RoadmapSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapSelect>;
export const RoadmapSelectObjectZodSchema = makeSchema();
