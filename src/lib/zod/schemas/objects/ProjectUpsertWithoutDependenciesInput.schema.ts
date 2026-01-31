import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutDependenciesInputObjectSchema as ProjectUpdateWithoutDependenciesInputObjectSchema } from './ProjectUpdateWithoutDependenciesInput.schema';
import { ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema as ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependenciesInput.schema';
import { ProjectCreateWithoutDependenciesInputObjectSchema as ProjectCreateWithoutDependenciesInputObjectSchema } from './ProjectCreateWithoutDependenciesInput.schema';
import { ProjectUncheckedCreateWithoutDependenciesInputObjectSchema as ProjectUncheckedCreateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedCreateWithoutDependenciesInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutDependenciesInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutDependenciesInput>;
export const ProjectUpsertWithoutDependenciesInputObjectZodSchema = makeSchema();
