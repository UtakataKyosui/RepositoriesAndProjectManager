import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithoutDependentInputObjectSchema as ProjectDependencyUpdateWithoutDependentInputObjectSchema } from './ProjectDependencyUpdateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedUpdateWithoutDependentInput.schema';
import { ProjectDependencyCreateWithoutDependentInputObjectSchema as ProjectDependencyCreateWithoutDependentInputObjectSchema } from './ProjectDependencyCreateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectDependencyUpdateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema)])
}).strict();
export const ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependentInput>;
export const ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectZodSchema = makeSchema();
