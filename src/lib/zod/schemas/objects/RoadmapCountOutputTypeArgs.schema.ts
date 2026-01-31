import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCountOutputTypeSelectObjectSchema as RoadmapCountOutputTypeSelectObjectSchema } from './RoadmapCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoadmapCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RoadmapCountOutputTypeArgsObjectSchema = makeSchema();
export const RoadmapCountOutputTypeArgsObjectZodSchema = makeSchema();
