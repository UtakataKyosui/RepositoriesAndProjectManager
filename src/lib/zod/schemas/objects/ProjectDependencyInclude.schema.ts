import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  dependency: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  dependent: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const ProjectDependencyIncludeObjectSchema: z.ZodType<Prisma.ProjectDependencyInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyInclude>;
export const ProjectDependencyIncludeObjectZodSchema = makeSchema();
