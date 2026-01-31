import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema as RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema } from './RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  published: z.boolean().optional(),
  status: ProjectStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  projects: z.lazy(() => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputObjectSchema).optional()
}).strict();
export const RoadmapUncheckedCreateWithoutGoalsInputObjectSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutGoalsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUncheckedCreateWithoutGoalsInput>;
export const RoadmapUncheckedCreateWithoutGoalsInputObjectZodSchema = makeSchema();
