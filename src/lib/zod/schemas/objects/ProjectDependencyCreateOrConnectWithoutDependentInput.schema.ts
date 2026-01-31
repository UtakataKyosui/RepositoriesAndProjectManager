import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyCreateWithoutDependentInputObjectSchema as ProjectDependencyCreateWithoutDependentInputObjectSchema } from './ProjectDependencyCreateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema)])
}).strict();
export const ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependentInput>;
export const ProjectDependencyCreateOrConnectWithoutDependentInputObjectZodSchema = makeSchema();
