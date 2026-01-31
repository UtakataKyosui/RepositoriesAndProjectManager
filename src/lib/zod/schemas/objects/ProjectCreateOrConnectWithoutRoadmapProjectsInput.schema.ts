import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutRoadmapProjectsInputObjectSchema as ProjectCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedCreateWithoutRoadmapProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutRoadmapProjectsInput>;
export const ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
