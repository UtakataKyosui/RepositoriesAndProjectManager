import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCountOutputTypeCountGoalsArgsObjectSchema as RoadmapCountOutputTypeCountGoalsArgsObjectSchema } from './RoadmapCountOutputTypeCountGoalsArgs.schema';
import { RoadmapCountOutputTypeCountProjectsArgsObjectSchema as RoadmapCountOutputTypeCountProjectsArgsObjectSchema } from './RoadmapCountOutputTypeCountProjectsArgs.schema'

const makeSchema = () => z.object({
  goals: z.union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeCountGoalsArgsObjectSchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeCountProjectsArgsObjectSchema)]).optional()
}).strict();
export const RoadmapCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RoadmapCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCountOutputTypeSelect>;
export const RoadmapCountOutputTypeSelectObjectZodSchema = makeSchema();
