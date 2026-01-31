import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutDependenciesNestedInput.schema';
import { ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutDependentsNestedInput.schema'

const makeSchema = () => z.object({
  dependency: z.lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema).optional(),
  dependent: z.lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema).optional()
}).strict();
export const ProjectDependencyUpdateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateInput>;
export const ProjectDependencyUpdateInputObjectZodSchema = makeSchema();
