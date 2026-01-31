import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema as ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateNestedOneWithoutRoadmapProjectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema)
}).strict();
export const RoadmapProjectCreateWithoutRoadmapInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutRoadmapInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateWithoutRoadmapInput>;
export const RoadmapProjectCreateWithoutRoadmapInputObjectZodSchema = makeSchema();
