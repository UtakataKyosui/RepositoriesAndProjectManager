import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './RepositoryWhereUniqueInput.schema';
import { RepositoryUpdateWithoutProjectInputObjectSchema as RepositoryUpdateWithoutProjectInputObjectSchema } from './RepositoryUpdateWithoutProjectInput.schema';
import { RepositoryUncheckedUpdateWithoutProjectInputObjectSchema as RepositoryUncheckedUpdateWithoutProjectInputObjectSchema } from './RepositoryUncheckedUpdateWithoutProjectInput.schema';
import { RepositoryCreateWithoutProjectInputObjectSchema as RepositoryCreateWithoutProjectInputObjectSchema } from './RepositoryCreateWithoutProjectInput.schema';
import { RepositoryUncheckedCreateWithoutProjectInputObjectSchema as RepositoryUncheckedCreateWithoutProjectInputObjectSchema } from './RepositoryUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RepositoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RepositoryUpdateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => RepositoryCreateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUpsertWithWhereUniqueWithoutProjectInput>;
export const RepositoryUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
