import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalWhereInputObjectSchema as RoadmapGoalWhereInputObjectSchema } from './RoadmapGoalWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoadmapGoalWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoadmapGoalWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoadmapGoalWhereInputObjectSchema).optional()
}).strict();
export const RoadmapGoalListRelationFilterObjectSchema: z.ZodType<Prisma.RoadmapGoalListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalListRelationFilter>;
export const RoadmapGoalListRelationFilterObjectZodSchema = makeSchema();
