import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutRepositoriesInputObjectSchema as ProjectCreateWithoutRepositoriesInputObjectSchema } from './ProjectCreateWithoutRepositoriesInput.schema';
import { ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema as ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedCreateWithoutRepositoriesInput.schema';
import { ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema as ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema } from './ProjectCreateOrConnectWithoutRepositoriesInput.schema';
import { ProjectUpsertWithoutRepositoriesInputObjectSchema as ProjectUpsertWithoutRepositoriesInputObjectSchema } from './ProjectUpsertWithoutRepositoriesInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutRepositoriesInputObjectSchema as ProjectUpdateToOneWithWhereWithoutRepositoriesInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutRepositoriesInput.schema';
import { ProjectUpdateWithoutRepositoriesInputObjectSchema as ProjectUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUpdateWithoutRepositoriesInput.schema';
import { ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema as ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedUpdateWithoutRepositoriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutRepositoriesInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUpdateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutRepositoriesNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRepositoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRepositoriesNestedInput>;
export const ProjectUpdateOneRequiredWithoutRepositoriesNestedInputObjectZodSchema = makeSchema();
