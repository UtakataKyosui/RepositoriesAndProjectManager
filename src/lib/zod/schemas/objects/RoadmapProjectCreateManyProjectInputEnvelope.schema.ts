import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectCreateManyProjectInputObjectSchema as RoadmapProjectCreateManyProjectInputObjectSchema } from './RoadmapProjectCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoadmapProjectCreateManyProjectInputObjectSchema), z.lazy(() => RoadmapProjectCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoadmapProjectCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateManyProjectInputEnvelope>;
export const RoadmapProjectCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
