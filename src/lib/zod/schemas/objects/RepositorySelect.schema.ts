import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  name: z.boolean().optional(),
  projectId: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const RepositorySelectObjectSchema: z.ZodType<Prisma.RepositorySelect> = makeSchema() as unknown as z.ZodType<Prisma.RepositorySelect>;
export const RepositorySelectObjectZodSchema = makeSchema();
