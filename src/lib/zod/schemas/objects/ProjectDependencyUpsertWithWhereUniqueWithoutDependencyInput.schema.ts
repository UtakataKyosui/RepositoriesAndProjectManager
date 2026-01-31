import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithoutDependencyInputObjectSchema as ProjectDependencyUpdateWithoutDependencyInputObjectSchema } from './ProjectDependencyUpdateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedUpdateWithoutDependencyInput.schema';
import { ProjectDependencyCreateWithoutDependencyInputObjectSchema as ProjectDependencyCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependencyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema)])
}).strict();
export const ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInput>;
export const ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectZodSchema = makeSchema();
