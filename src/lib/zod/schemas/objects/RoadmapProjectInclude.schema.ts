import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapArgsObjectSchema as RoadmapArgsObjectSchema } from './RoadmapArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsObjectSchema)]).optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const RoadmapProjectIncludeObjectSchema: z.ZodType<Prisma.RoadmapProjectInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectInclude>;
export const RoadmapProjectIncludeObjectZodSchema = makeSchema();
