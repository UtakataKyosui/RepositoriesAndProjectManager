import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapGoalCreateManyRoadmapInputObjectSchema as RoadmapGoalCreateManyRoadmapInputObjectSchema } from './RoadmapGoalCreateManyRoadmapInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoadmapGoalCreateManyRoadmapInputObjectSchema), z.lazy(() => RoadmapGoalCreateManyRoadmapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoadmapGoalCreateManyRoadmapInputEnvelopeObjectSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInputEnvelope>;
export const RoadmapGoalCreateManyRoadmapInputEnvelopeObjectZodSchema = makeSchema();
