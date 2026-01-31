import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUpdateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedUpdateWithoutRoadmapProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInput>;
export const ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
