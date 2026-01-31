import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './objects/RepositoryInclude.schema';
import { RepositoryUpdateInputObjectSchema as RepositoryUpdateInputObjectSchema } from './objects/RepositoryUpdateInput.schema';
import { RepositoryUncheckedUpdateInputObjectSchema as RepositoryUncheckedUpdateInputObjectSchema } from './objects/RepositoryUncheckedUpdateInput.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './objects/RepositoryWhereUniqueInput.schema';

export const RepositoryUpdateOneSchema: z.ZodType<Prisma.RepositoryUpdateArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), data: z.union([RepositoryUpdateInputObjectSchema, RepositoryUncheckedUpdateInputObjectSchema]), where: RepositoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RepositoryUpdateArgs>;

export const RepositoryUpdateOneZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), data: z.union([RepositoryUpdateInputObjectSchema, RepositoryUncheckedUpdateInputObjectSchema]), where: RepositoryWhereUniqueInputObjectSchema }).strict();