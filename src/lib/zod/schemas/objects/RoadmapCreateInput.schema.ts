import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { UserCreateNestedOneWithoutRoadmapsInputObjectSchema as UserCreateNestedOneWithoutRoadmapsInputObjectSchema } from './UserCreateNestedOneWithoutRoadmapsInput.schema';
import { RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapGoalCreateNestedManyWithoutRoadmapInput.schema';
import { RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapProjectCreateNestedManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputObjectSchema),
  goals: z.lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputObjectSchema).optional(),
  projects: z.lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputObjectSchema).optional()
}).strict();
export const RoadmapCreateInputObjectSchema: z.ZodType<Prisma.RoadmapCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateInput>;
export const RoadmapCreateInputObjectZodSchema = makeSchema();
