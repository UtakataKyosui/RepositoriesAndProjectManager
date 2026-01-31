import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithoutDependentInputObjectSchema as ProjectDependencyUpdateWithoutDependentInputObjectSchema } from './ProjectDependencyUpdateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedUpdateWithoutDependentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectDependencyUpdateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema)])
}).strict();
export const ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependentInput>;
export const ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectZodSchema = makeSchema();
