import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryUpdateManyMutationInputObjectSchema as RepositoryUpdateManyMutationInputObjectSchema } from './objects/RepositoryUpdateManyMutationInput.schema';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './objects/RepositoryWhereInput.schema';

export const RepositoryUpdateManyAndReturnSchema: z.ZodType<Prisma.RepositoryUpdateManyAndReturnArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), data: RepositoryUpdateManyMutationInputObjectSchema, where: RepositoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryUpdateManyAndReturnArgs>;

export const RepositoryUpdateManyAndReturnZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), data: RepositoryUpdateManyMutationInputObjectSchema, where: RepositoryWhereInputObjectSchema.optional() }).strict();