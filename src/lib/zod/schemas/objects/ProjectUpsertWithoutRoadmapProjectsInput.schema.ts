import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUpdateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedUpdateWithoutRoadmapProjectsInput.schema';
import { ProjectCreateWithoutRoadmapProjectsInputObjectSchema as ProjectCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedCreateWithoutRoadmapProjectsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutRoadmapProjectsInput>;
export const ProjectUpsertWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
