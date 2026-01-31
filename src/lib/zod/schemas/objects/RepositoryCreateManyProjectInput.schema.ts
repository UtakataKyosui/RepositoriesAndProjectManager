import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const RepositoryCreateManyProjectInputObjectSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateManyProjectInput>;
export const RepositoryCreateManyProjectInputObjectZodSchema = makeSchema();
