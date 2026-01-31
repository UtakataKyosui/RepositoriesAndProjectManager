import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './ProjectDependencySelect.schema';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './ProjectDependencyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProjectDependencySelectObjectSchema).optional(),
  include: z.lazy(() => ProjectDependencyIncludeObjectSchema).optional()
}).strict();
export const ProjectDependencyArgsObjectSchema = makeSchema();
export const ProjectDependencyArgsObjectZodSchema = makeSchema();
