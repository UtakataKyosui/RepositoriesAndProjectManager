import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateWithoutDependentInputObjectSchema as ProjectDependencyCreateWithoutDependentInputObjectSchema } from './ProjectDependencyCreateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependentInput.schema';
import { ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema as ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema } from './ProjectDependencyCreateOrConnectWithoutDependentInput.schema';
import { ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema as ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema } from './ProjectDependencyCreateManyDependentInputEnvelope.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema).array(), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectDependencyCreateNestedManyWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependentInput>;
export const ProjectDependencyCreateNestedManyWithoutDependentInputObjectZodSchema = makeSchema();
