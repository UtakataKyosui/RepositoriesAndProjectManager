import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutRoadmapProjectsInputObjectSchema as ProjectCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedCreateWithoutRoadmapProjectsInput.schema';
import { ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema as ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema } from './ProjectCreateOrConnectWithoutRoadmapProjectsInput.schema';
import { ProjectUpsertWithoutRoadmapProjectsInputObjectSchema as ProjectUpsertWithoutRoadmapProjectsInputObjectSchema } from './ProjectUpsertWithoutRoadmapProjectsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInput.schema';
import { ProjectUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUpdateWithoutRoadmapProjectsInput.schema';
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema as ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema } from './ProjectUncheckedUpdateWithoutRoadmapProjectsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRoadmapProjectsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutRoadmapProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput>;
export const ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputObjectZodSchema = makeSchema();
