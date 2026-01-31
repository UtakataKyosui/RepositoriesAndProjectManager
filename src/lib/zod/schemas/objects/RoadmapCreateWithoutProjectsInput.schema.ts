import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { UserCreateNestedOneWithoutRoadmapsInputObjectSchema as UserCreateNestedOneWithoutRoadmapsInputObjectSchema } from './UserCreateNestedOneWithoutRoadmapsInput.schema';
import { RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateNestedManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputObjectSchema),
  goals: z.lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema).optional()
}).strict();
export const RoadmapCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateWithoutProjectsInput>;
export const RoadmapCreateWithoutProjectsInputObjectZodSchema = makeSchema();
