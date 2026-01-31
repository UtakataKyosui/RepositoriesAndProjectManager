import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RepositoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.RepositoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryWhereUniqueInput>;
export const RepositoryWhereUniqueInputObjectZodSchema = makeSchema();
