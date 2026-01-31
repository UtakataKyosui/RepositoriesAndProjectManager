import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapArgsObjectSchema as RoadmapArgsObjectSchema } from './RoadmapArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  order: z.boolean().optional(),
  isCompleted: z.boolean().optional(),
  roadmapId: z.boolean().optional(),
  roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsObjectSchema)]).optional()
}).strict();
export const RoadmapGoalSelectObjectSchema: z.ZodType<Prisma.RoadmapGoalSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalSelect>;
export const RoadmapGoalSelectObjectZodSchema = makeSchema();
