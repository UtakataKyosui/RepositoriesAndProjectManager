import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutDependentsInputObjectSchema as ProjectUpdateWithoutDependentsInputObjectSchema } from './ProjectUpdateWithoutDependentsInput.schema';
import { ProjectUncheckedUpdateWithoutDependentsInputObjectSchema as ProjectUncheckedUpdateWithoutDependentsInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependentsInput.schema';
import { ProjectCreateWithoutDependentsInputObjectSchema as ProjectCreateWithoutDependentsInputObjectSchema } from './ProjectCreateWithoutDependentsInput.schema';
import { ProjectUncheckedCreateWithoutDependentsInputObjectSchema as ProjectUncheckedCreateWithoutDependentsInputObjectSchema } from './ProjectUncheckedCreateWithoutDependentsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutDependentsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutDependentsInput>;
export const ProjectUpsertWithoutDependentsInputObjectZodSchema = makeSchema();
