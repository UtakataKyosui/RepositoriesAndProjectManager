import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositoryUpdateManyMutationInputObjectSchema as RepositoryUpdateManyMutationInputObjectSchema } from './objects/RepositoryUpdateManyMutationInput.schema';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './objects/RepositoryWhereInput.schema';

export const RepositoryUpdateManySchema: z.ZodType<Prisma.RepositoryUpdateManyArgs> = z.object({ data: RepositoryUpdateManyMutationInputObjectSchema, where: RepositoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryUpdateManyArgs>;

export const RepositoryUpdateManyZodSchema = z.object({ data: RepositoryUpdateManyMutationInputObjectSchema, where: RepositoryWhereInputObjectSchema.optional() }).strict();