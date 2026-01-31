import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapSelectObjectSchema as RoadmapSelectObjectSchema } from './RoadmapSelect.schema';
import { RoadmapIncludeObjectSchema as RoadmapIncludeObjectSchema } from './RoadmapInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoadmapSelectObjectSchema).optional(),
  include: z.lazy(() => RoadmapIncludeObjectSchema).optional()
}).strict();
export const RoadmapArgsObjectSchema = makeSchema();
export const RoadmapArgsObjectZodSchema = makeSchema();
