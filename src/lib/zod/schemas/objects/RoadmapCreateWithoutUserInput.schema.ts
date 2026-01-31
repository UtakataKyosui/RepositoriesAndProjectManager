import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateNestedManyWithoutRoadmapInput.schema';
import { RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateNestedManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  goals: z.lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema).optional(),
  projects: z.lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema).optional()
}).strict();
export const RoadmapCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateWithoutUserInput>;
export const RoadmapCreateWithoutUserInputObjectZodSchema = makeSchema();
