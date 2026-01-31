import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './objects/RepositorySelect.schema';
import { RepositoryCreateManyInputObjectSchema as RepositoryCreateManyInputObjectSchema } from './objects/RepositoryCreateManyInput.schema';

export const RepositoryCreateManyAndReturnSchema: z.ZodType<Prisma.RepositoryCreateManyAndReturnArgs> = z.object({ select: RepositorySelectObjectSchema.optional(), data: z.union([ RepositoryCreateManyInputObjectSchema, z.array(RepositoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryCreateManyAndReturnArgs>;

export const RepositoryCreateManyAndReturnZodSchema = z.object({ select: RepositorySelectObjectSchema.optional(), data: z.union([ RepositoryCreateManyInputObjectSchema, z.array(RepositoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();