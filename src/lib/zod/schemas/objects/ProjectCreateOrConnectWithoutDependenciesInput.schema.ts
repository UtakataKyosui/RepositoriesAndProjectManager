import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutDependenciesInputObjectSchema as ProjectCreateWithoutDependenciesInputObjectSchema } from './ProjectCreateWithoutDependenciesInput.schema';
import { ProjectUncheckedCreateWithoutDependenciesInputObjectSchema as ProjectUncheckedCreateWithoutDependenciesInputObjectSchema } from './ProjectUncheckedCreateWithoutDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutDependenciesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutDependenciesInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependenciesInput>;
export const ProjectCreateOrConnectWithoutDependenciesInputObjectZodSchema = makeSchema();
