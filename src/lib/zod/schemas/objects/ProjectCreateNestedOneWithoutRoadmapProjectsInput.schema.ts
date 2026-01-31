import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutRoadmapProjectsInputObjectSchema as ProjectCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedCreateWithoutRoadmapProjectsInput.schema';
import { ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema as ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateOrConnectWithoutRoadmapProjectsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRoadmapProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutRoadmapProjectsInput>;
export const ProjectCreateNestedOneWithoutRoadmapProjectsInputObjectZodSchema = makeSchema();
