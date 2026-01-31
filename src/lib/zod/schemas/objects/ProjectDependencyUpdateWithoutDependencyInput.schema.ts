import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutDependentsNestedInput.schema'

const makeSchema = () => z.object({
  dependent: z.lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputObjectSchema).optional()
}).strict();
export const ProjectDependencyUpdateWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependencyInput>;
export const ProjectDependencyUpdateWithoutDependencyInputObjectZodSchema = makeSchema();
