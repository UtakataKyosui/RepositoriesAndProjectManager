import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutRepositoriesInputObjectSchema as ProjectUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUpdateWithoutRepositoriesInput.schema';
import { ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema as ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedUpdateWithoutRepositoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutRepositoriesInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRepositoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRepositoriesInput>;
export const ProjectUpdateToOneWithWhereWithoutRepositoriesInputObjectZodSchema = makeSchema();
