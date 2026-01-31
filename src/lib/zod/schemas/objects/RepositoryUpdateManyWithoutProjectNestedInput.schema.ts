import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryCreateWithoutProjectInputObjectSchema as RepositoryCreateWithoutProjectInputObjectSchema } from './RepositoryCreateWithoutProjectInput.schema';
import { RepositoryUncheckedCreateWithoutProjectInputObjectSchema as RepositoryUncheckedCreateWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateWithoutProjectInput.schema';
import { RepositoryCreateOrConnectWithoutProjectInputObjectSchema as RepositoryCreateOrConnectWithoutProjectInputObjectSchema } from './RepositoryCreateOrConnectWithoutProjectInput.schema';
import { RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectSchema as RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './RepositoryUpsertWithWhereUniqueWithoutProjectInput.schema';
import { RepositoryCreateManyProjectInputEnvelopeObjectSchema as RepositoryCreateManyProjectInputEnvelopeObjectSchema } from './RepositoryCreateManyProjectInputEnvelope.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './RepositoryWhereUniqueInput.schema';
import { RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectSchema as RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './RepositoryUpdateWithWhereUniqueWithoutProjectInput.schema';
import { RepositoryUpdateManyWithWhereWithoutProjectInputObjectSchema as RepositoryUpdateManyWithWhereWithoutProjectInputObjectSchema } from './RepositoryUpdateManyWithWhereWithoutProjectInput.schema';
import { RepositoryScalarWhereInputObjectSchema as RepositoryScalarWhereInputObjectSchema } from './RepositoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RepositoryCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RepositoryWhereUniqueInputObjectSchema), z.lazy(() => RepositoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RepositoryWhereUniqueInputObjectSchema), z.lazy(() => RepositoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RepositoryWhereUniqueInputObjectSchema), z.lazy(() => RepositoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RepositoryWhereUniqueInputObjectSchema), z.lazy(() => RepositoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RepositoryScalarWhereInputObjectSchema), z.lazy(() => RepositoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RepositoryUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.RepositoryUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUpdateManyWithoutProjectNestedInput>;
export const RepositoryUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
