import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateNestedOneWithoutProjectsInputObjectSchema as RoadmapCreateNestedOneWithoutProjectsInputObjectSchema } from './RoadmapCreateNestedOneWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  order: z.number().int().optional(),
  roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputObjectSchema)
}).strict();
export const RoadmapProjectCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectCreateWithoutProjectInput>;
export const RoadmapProjectCreateWithoutProjectInputObjectZodSchema = makeSchema();
