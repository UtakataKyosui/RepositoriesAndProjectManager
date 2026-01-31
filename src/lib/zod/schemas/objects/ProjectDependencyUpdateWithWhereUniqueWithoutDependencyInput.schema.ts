import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithoutDependencyInputObjectSchema as ProjectDependencyUpdateWithoutDependencyInputObjectSchema } from './ProjectDependencyUpdateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedUpdateWithoutDependencyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema)])
}).strict();
export const ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInput>;
export const ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectZodSchema = makeSchema();
