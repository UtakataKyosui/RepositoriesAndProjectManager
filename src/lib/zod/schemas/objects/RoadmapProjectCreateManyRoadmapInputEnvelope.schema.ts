import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateManyRoadmapInputObjectSchema as RoadmapProjectCreateManyRoadmapInputObjectSchema } from './RoadmapProjectCreateManyRoadmapInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoadmapProjectCreateManyRoadmapInputObjectSchema), z.lazy(() => RoadmapProjectCreateManyRoadmapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoadmapProjectCreateManyRoadmapInputEnvelopeObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInputEnvelope>;
export const RoadmapProjectCreateManyRoadmapInputEnvelopeObjectZodSchema = makeSchema();
