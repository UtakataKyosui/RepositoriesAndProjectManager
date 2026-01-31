import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutDependenciesInputObjectSchema as ProjectCreateWithoutDependenciesInputObjectSchema } from './ProjectCreateWithoutDependenciesInput.schema';
import { ProjectUncheckedCreateWithoutDependenciesInputObjectSchema as ProjectUncheckedCreateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedCreateWithoutDependenciesInput.schema';
import { ProjectCreateOrConnectWithoutDependenciesInputObjectSchema as ProjectCreateOrConnectWithoutDependenciesInputObjectSchema } from './ProjectCreateOrConnectWithoutDependenciesInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutDependenciesInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependenciesInput>;
export const ProjectCreateNestedOneWithoutDependenciesInputObjectZodSchema = makeSchema();
