import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositorySelectObjectSchema as RepositorySelectObjectSchema } from './RepositorySelect.schema';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './RepositoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RepositorySelectObjectSchema).optional(),
  include: z.lazy(() => RepositoryIncludeObjectSchema).optional()
}).strict();
export const RepositoryArgsObjectSchema = makeSchema();
export const RepositoryArgsObjectZodSchema = makeSchema();
