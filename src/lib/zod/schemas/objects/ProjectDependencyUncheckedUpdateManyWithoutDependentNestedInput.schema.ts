import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateWithoutDependentInputObjectSchema as ProjectDependencyCreateWithoutDependentInputObjectSchema } from './ProjectDependencyCreateWithoutDependentInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependentInput.schema';
import { ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema as ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema } from './ProjectDependencyCreateOrConnectWithoutDependentInput.schema';
import { ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectSchema as ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectSchema } from './ProjectDependencyUpsertWithWhereUniqueWithoutDependentInput.schema';
import { ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema as ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema } from './ProjectDependencyCreateManyDependentInputEnvelope.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectSchema as ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectSchema } from './ProjectDependencyUpdateWithWhereUniqueWithoutDependentInput.schema';
import { ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectSchema as ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectSchema } from './ProjectDependencyUpdateManyWithWhereWithoutDependentInput.schema';
import { ProjectDependencyScalarWhereInputObjectSchema as ProjectDependencyScalarWhereInputObjectSchema } from './ProjectDependencyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyCreateWithoutDependentInputObjectSchema).array(), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectSchema), z.lazy(() => ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInput>;
export const ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputObjectZodSchema = makeSchema();
