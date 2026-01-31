import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateNestedOneWithoutGoalsInputObjectSchema as RoadmapCreateNestedOneWithoutGoalsInputObjectSchema } from './RoadmapCreateNestedOneWithoutGoalsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  order: z.number().int().optional(),
  isCompleted: z.boolean().optional(),
  roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutGoalsInputObjectSchema)
}).strict();
export const RoadmapGoalCreateInputObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateInput>;
export const RoadmapGoalCreateInputObjectZodSchema = makeSchema();
