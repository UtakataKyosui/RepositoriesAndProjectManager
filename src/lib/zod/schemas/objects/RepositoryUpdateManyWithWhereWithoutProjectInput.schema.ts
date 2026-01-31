import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryScalarWhereInputObjectSchema as RepositoryScalarWhereInputObjectSchema } from './RepositoryScalarWhereInput.schema';
import { RepositoryUpdateManyMutationInputObjectSchema as RepositoryUpdateManyMutationInputObjectSchema } from './RepositoryUpdateManyMutationInput.schema';
import { RepositoryUncheckedUpdateManyWithoutProjectInputObjectSchema as RepositoryUncheckedUpdateManyWithoutProjectInputObjectSchema } from './RepositoryUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RepositoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RepositoryUpdateManyMutationInputObjectSchema), z.lazy(() => RepositoryUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const RepositoryUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUpdateManyWithWhereWithoutProjectInput>;
export const RepositoryUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
