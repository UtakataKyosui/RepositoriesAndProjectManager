import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutRepositoriesInputObjectSchema as ProjectUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUpdateWithoutRepositoriesInput.schema';
import { ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema as ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedUpdateWithoutRepositoriesInput.schema';
import { ProjectCreateWithoutRepositoriesInputObjectSchema as ProjectCreateWithoutRepositoriesInputObjectSchema } from './ProjectCreateWithoutRepositoriesInput.schema';
import { ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema as ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedCreateWithoutRepositoriesInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutRepositoriesInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutRepositoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutRepositoriesInput>;
export const ProjectUpsertWithoutRepositoriesInputObjectZodSchema = makeSchema();
