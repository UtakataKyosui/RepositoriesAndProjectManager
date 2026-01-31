import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './objects/RepositoryInclude.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './objects/RepositoryWhereUniqueInput.schema';

export const RepositoryFindUniqueOrThrowSchema: z.ZodType<Prisma.RepositoryFindUniqueOrThrowArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), where: RepositoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RepositoryFindUniqueOrThrowArgs>;

export const RepositoryFindUniqueOrThrowZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), include: RepositoryIncludeObjectSchema.optional(), where: RepositoryWhereUniqueInputObjectSchema }).strict();