import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapArgsObjectSchema as RoadmapArgsObjectSchema } from './RoadmapArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  order: z.boolean().optional(),
  roadmapId: z.boolean().optional(),
  roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsObjectSchema)]).optional(),
  projectId: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const RoadmapProjectSelectObjectSchema: z.ZodType<Prisma.RoadmapProjectSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectSelect>;
export const RoadmapProjectSelectObjectZodSchema = makeSchema();
