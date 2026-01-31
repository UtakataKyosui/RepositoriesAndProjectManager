import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  goals: z.lazy(() => RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema).optional()
}).strict();
export const RoadmapUncheckedCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUncheckedCreateWithoutProjectsInput>;
export const RoadmapUncheckedCreateWithoutProjectsInputObjectZodSchema = makeSchema();
