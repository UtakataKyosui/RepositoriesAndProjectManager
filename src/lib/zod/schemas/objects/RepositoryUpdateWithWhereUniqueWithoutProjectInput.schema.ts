import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './RepositoryWhereUniqueInput.schema';
import { RepositoryUpdateWithoutProjectInputObjectSchema as RepositoryUpdateWithoutProjectInputObjectSchema } from './RepositoryUpdateWithoutProjectInput.schema';
import { RepositoryUncheckedUpdateWithoutProjectInputObjectSchema as RepositoryUncheckedUpdateWithoutProjectInputObjectSchema } from './RepositoryUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RepositoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RepositoryUpdateWithoutProjectInputObjectSchema), z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUpdateWithWhereUniqueWithoutProjectInput>;
export const RepositoryUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
