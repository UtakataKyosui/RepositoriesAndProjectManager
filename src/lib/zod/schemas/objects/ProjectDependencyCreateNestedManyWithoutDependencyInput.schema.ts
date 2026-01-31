import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateWithoutDependencyInputObjectSchema as ProjectDependencyCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependencyInput.schema';
import { ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema as ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateOrConnectWithoutDependencyInput.schema';
import { ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema as ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema } from './ProjectDependencyCreateManyDependencyInputEnvelope.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema).array(), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectDependencyCreateNestedManyWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependencyInput>;
export const ProjectDependencyCreateNestedManyWithoutDependencyInputObjectZodSchema = makeSchema();
