import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutRepositoriesInputObjectSchema as ProjectCreateNestedOneWithoutRepositoriesInputObjectSchema } from './ProjectCreateNestedOneWithoutRepositoriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutRepositoriesInputObjectSchema)
}).strict();
export const RepositoryCreateInputObjectSchema: z.ZodType<Prisma.RepositoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateInput>;
export const RepositoryCreateInputObjectZodSchema = makeSchema();
