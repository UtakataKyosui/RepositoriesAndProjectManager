import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositoryCreateManyInputObjectSchema as RepositoryCreateManyInputObjectSchema } from './objects/RepositoryCreateManyInput.schema';

export const RepositoryCreateManySchema: z.ZodType<Prisma.RepositoryCreateManyArgs> = z.object({ data: z.union([ RepositoryCreateManyInputObjectSchema, z.array(RepositoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryCreateManyArgs>;

export const RepositoryCreateManyZodSchema = z.object({ data: z.union([ RepositoryCreateManyInputObjectSchema, z.array(RepositoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();