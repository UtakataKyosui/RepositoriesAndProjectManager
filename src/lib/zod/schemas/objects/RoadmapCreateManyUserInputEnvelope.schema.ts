import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateManyUserInputObjectSchema as RoadmapCreateManyUserInputObjectSchema } from './RoadmapCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoadmapCreateManyUserInputObjectSchema), z.lazy(() => RoadmapCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoadmapCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.RoadmapCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateManyUserInputEnvelope>;
export const RoadmapCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
