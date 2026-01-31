import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutDependentsInputObjectSchema as ProjectUpdateWithoutDependentsInputObjectSchema } from './ProjectUpdateWithoutDependentsInput.schema';
import { ProjectUncheckedUpdateWithoutDependentsInputObjectSchema as ProjectUncheckedUpdateWithoutDependentsInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutDependentsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependentsInput>;
export const ProjectUpdateToOneWithWhereWithoutDependentsInputObjectZodSchema = makeSchema();
