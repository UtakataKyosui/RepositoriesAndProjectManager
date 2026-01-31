import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryCreateWithoutProjectInputObjectSchema as RepositoryCreateWithoutProjectInputObjectSchema } from './RepositoryCreateWithoutProjectInput.schema';
import { RepositoryUncheckedCreateWithoutProjectInputObjectSchema as RepositoryUncheckedCreateWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateWithoutProjectInput.schema';
import { RepositoryCreateOrConnectWithoutProjectInputObjectSchema as RepositoryCreateOrConnectWithoutProjectInputObjectSchema } from './RepositoryCreateOrConnectWithoutProjectInput.schema';
import { RepositoryCreateManyProjectInputEnvelopeObjectSchema as RepositoryCreateManyProjectInputEnvelopeObjectSchema } from './RepositoryCreateManyProjectInputEnvelope.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './RepositoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RepositoryCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RepositoryWhereUniqueInputObjectSchema), z.lazy(() => RepositoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RepositoryCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateNestedManyWithoutProjectInput>;
export const RepositoryCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
