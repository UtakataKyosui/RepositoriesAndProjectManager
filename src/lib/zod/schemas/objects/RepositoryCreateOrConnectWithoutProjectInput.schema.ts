import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './RepositoryWhereUniqueInput.schema';
import { RepositoryCreateWithoutProjectInputObjectSchema as RepositoryCreateWithoutProjectInputObjectSchema } from './RepositoryCreateWithoutProjectInput.schema';
import { RepositoryUncheckedCreateWithoutProjectInputObjectSchema as RepositoryUncheckedCreateWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RepositoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const RepositoryCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateOrConnectWithoutProjectInput>;
export const RepositoryCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
