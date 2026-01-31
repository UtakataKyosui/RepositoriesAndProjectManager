import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  dependencyId: z.boolean().optional(),
  dependency: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  dependentId: z.boolean().optional(),
  dependent: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const ProjectDependencySelectObjectSchema: z.ZodType<Prisma.ProjectDependencySelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencySelect>;
export const ProjectDependencySelectObjectZodSchema = makeSchema();
