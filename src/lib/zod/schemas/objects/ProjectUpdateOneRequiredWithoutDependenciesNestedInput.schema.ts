import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutDependenciesInputObjectSchema as ProjectCreateWithoutDependenciesInputObjectSchema } from './ProjectCreateWithoutDependenciesInput.schema';
import { ProjectUncheckedCreateWithoutDependenciesInputObjectSchema as ProjectUncheckedCreateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedCreateWithoutDependenciesInput.schema';
import { ProjectCreateOrConnectWithoutDependenciesInputObjectSchema as ProjectCreateOrConnectWithoutDependenciesInputObjectSchema } from './ProjectCreateOrConnectWithoutDependenciesInput.schema';
import { ProjectUpsertWithoutDependenciesInputObjectSchema as ProjectUpsertWithoutDependenciesInputObjectSchema } from './ProjectUpsertWithoutDependenciesInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutDependenciesInputObjectSchema as ProjectUpdateToOneWithWhereWithoutDependenciesInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutDependenciesInput.schema';
import { ProjectUpdateWithoutDependenciesInputObjectSchema as ProjectUpdateWithoutDependenciesInputObjectSchema } from './ProjectUpdateWithoutDependenciesInput.schema';
import { ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema as ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedUpdateWithoutDependenciesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDependenciesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUpdateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependenciesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependenciesNestedInput>;
export const ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectZodSchema = makeSchema();
