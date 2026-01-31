import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const RepositoryUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryUncheckedCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUncheckedCreateWithoutProjectInput>;
export const RepositoryUncheckedCreateWithoutProjectInputObjectZodSchema = makeSchema();
