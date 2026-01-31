import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutDependenciesInputObjectSchema as ProjectUpdateWithoutDependenciesInputObjectSchema } from './ProjectUpdateWithoutDependenciesInput.schema';
import { ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema as ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutDependenciesInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependenciesInput>;
export const ProjectUpdateToOneWithWhereWithoutDependenciesInputObjectZodSchema = makeSchema();
