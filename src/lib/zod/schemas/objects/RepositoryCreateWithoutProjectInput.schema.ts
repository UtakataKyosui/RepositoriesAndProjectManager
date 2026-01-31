import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const RepositoryCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateWithoutProjectInput>;
export const RepositoryCreateWithoutProjectInputObjectZodSchema = makeSchema();
