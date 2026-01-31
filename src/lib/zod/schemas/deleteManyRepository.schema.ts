import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './objects/RepositoryWhereInput.schema';

export const RepositoryDeleteManySchema: z.ZodType<Prisma.RepositoryDeleteManyArgs> = z.object({ where: RepositoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryDeleteManyArgs>;

export const RepositoryDeleteManyZodSchema = z.object({ where: RepositoryWhereInputObjectSchema.optional() }).strict();