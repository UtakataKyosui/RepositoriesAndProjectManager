import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string().optional().nullable(),
  projectId: z.string()
}).strict();
export const RepositoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RepositoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUncheckedCreateInput>;
export const RepositoryUncheckedCreateInputObjectZodSchema = makeSchema();
