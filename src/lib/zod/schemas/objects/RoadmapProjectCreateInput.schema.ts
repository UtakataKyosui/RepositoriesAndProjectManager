import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateNestedOneWithoutProjectsInputObjectSchema as RoadmapCreateNestedOneWithoutProjectsInputObjectSchema } from './RoadmapCreateNestedOneWithoutProjectsInput.schema';
import { ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema as ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateNestedOneWithoutRoadmapProjectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputObjectSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema)
}).strict();
export const RoadmapProjectCreateInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateInput>;
export const RoadmapProjectCreateInputObjectZodSchema = makeSchema();
