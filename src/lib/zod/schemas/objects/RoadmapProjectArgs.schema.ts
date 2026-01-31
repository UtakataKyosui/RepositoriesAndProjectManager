import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './RoadmapProjectSelect.schema';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './RoadmapProjectInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoadmapProjectSelectObjectSchema).optional(),
  include: z.lazy(() => RoadmapProjectIncludeObjectSchema).optional()
}).strict();
export const RoadmapProjectArgsObjectSchema = makeSchema();
export const RoadmapProjectArgsObjectZodSchema = makeSchema();
