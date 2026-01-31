import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutDependentsInputObjectSchema as ProjectCreateWithoutDependentsInputObjectSchema } from './ProjectCreateWithoutDependentsInput.schema';
import { ProjectUncheckedCreateWithoutDependentsInputObjectSchema as ProjectUncheckedCreateWithoutDependentsInputObjectSchema } from './ProjectUncheckedCreateWithoutDependentsInput.schema';
import { ProjectCreateOrConnectWithoutDependentsInputObjectSchema as ProjectCreateOrConnectWithoutDependentsInputObjectSchema } from './ProjectCreateOrConnectWithoutDependentsInput.schema';
import { ProjectUpsertWithoutDependentsInputObjectSchema as ProjectUpsertWithoutDependentsInputObjectSchema } from './ProjectUpsertWithoutDependentsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutDependentsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutDependentsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutDependentsInput.schema';
import { ProjectUpdateWithoutDependentsInputObjectSchema as ProjectUpdateWithoutDependentsInputObjectSchema } from './ProjectUpdateWithoutDependentsInput.schema';
import { ProjectUncheckedUpdateWithoutDependentsInputObjectSchema as ProjectUncheckedUpdateWithoutDependentsInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDependentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutDependentsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependentsNestedInput>;
export const ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectZodSchema = makeSchema();
