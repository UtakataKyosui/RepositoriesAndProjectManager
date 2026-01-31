import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateWithoutDependencyInputObjectSchema as ProjectDependencyCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateWithoutDependencyInput.schema';
import { ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedCreateWithoutDependencyInput.schema';
import { ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema as ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema } from './ProjectDependencyCreateOrConnectWithoutDependencyInput.schema';
import { ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectSchema as ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectSchema } from './ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInput.schema';
import { ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema as ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema } from './ProjectDependencyCreateManyDependencyInputEnvelope.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectSchema as ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectSchema } from './ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInput.schema';
import { ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectSchema as ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectSchema } from './ProjectDependencyUpdateManyWithWhereWithoutDependencyInput.schema';
import { ProjectDependencyScalarWhereInputObjectSchema as ProjectDependencyScalarWhereInputObjectSchema } from './ProjectDependencyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyCreateWithoutDependencyInputObjectSchema).array(), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyCreateOrConnectWithoutDependencyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema), z.lazy(() => ProjectDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectSchema), z.lazy(() => ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema), z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectDependencyUpdateManyWithoutDependencyNestedInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithoutDependencyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyWithoutDependencyNestedInput>;
export const ProjectDependencyUpdateManyWithoutDependencyNestedInputObjectZodSchema = makeSchema();
