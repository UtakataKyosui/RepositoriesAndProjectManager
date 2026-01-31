import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyCreateWithoutDependencyInputObjectSchema as ProjectDependencyCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependencyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema)])
}).strict();
export const ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependencyInput>;
export const ProjectDependencyCreateOrConnectWithoutDependencyInputObjectZodSchema = makeSchema();
