import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './objects/RepositoryInclude.schema';
import { RepositoryCreateInputObjectSchema as RepositoryCreateInputObjectSchema } from './objects/RepositoryCreateInput.schema';
import { RepositoryUncheckedCreateInputObjectSchema as RepositoryUncheckedCreateInputObjectSchema } from './objects/RepositoryUncheckedCreateInput.schema';

export const RepositoryCreateOneSchema: z.ZodType<Prisma.RepositoryCreateArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), data: z.union([RepositoryCreateInputObjectSchema, RepositoryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RepositoryCreateArgs>;

export const RepositoryCreateOneZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), data: z.union([RepositoryCreateInputObjectSchema, RepositoryUncheckedCreateInputObjectSchema]) }).strict();