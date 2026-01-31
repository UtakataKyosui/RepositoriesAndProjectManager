import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapArgsObjectSchema as RoadmapArgsObjectSchema } from './RoadmapArgs.schema'

const makeSchema = () => z.object({
  roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsObjectSchema)]).optional()
}).strict();
export const RoadmapGoalIncludeObjectSchema: z.ZodType<Prisma.RoadmapGoalInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapGoalInclude>;
export const RoadmapGoalIncludeObjectZodSchema = makeSchema();
