import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './objects/RepositoryInclude.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './objects/RepositoryWhereUniqueInput.schema';
import { RepositoryCreateInputObjectSchema as RepositoryCreateInputObjectSchema } from './objects/RepositoryCreateInput.schema';
import { RepositoryUncheckedCreateInputObjectSchema as RepositoryUncheckedCreateInputObjectSchema } from './objects/RepositoryUncheckedCreateInput.schema';
import { RepositoryUpdateInputObjectSchema as RepositoryUpdateInputObjectSchema } from './objects/RepositoryUpdateInput.schema';
import { RepositoryUncheckedUpdateInputObjectSchema as RepositoryUncheckedUpdateInputObjectSchema } from './objects/RepositoryUncheckedUpdateInput.schema';

export const RepositoryUpsertOneSchema: z.ZodType<Prisma.RepositoryUpsertArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), where: RepositoryWhereUniqueInputObjectSchema, create: z.union([ RepositoryCreateInputObjectSchema, RepositoryUncheckedCreateInputObjectSchema ]), update: z.union([ RepositoryUpdateInputObjectSchema, RepositoryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RepositoryUpsertArgs>;

export const RepositoryUpsertOneZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), where: RepositoryWhereUniqueInputObjectSchema, create: z.union([ RepositoryCreateInputObjectSchema, RepositoryUncheckedCreateInputObjectSchema ]), update: z.union([ RepositoryUpdateInputObjectSchema, RepositoryUncheckedUpdateInputObjectSchema ]) }).strict();