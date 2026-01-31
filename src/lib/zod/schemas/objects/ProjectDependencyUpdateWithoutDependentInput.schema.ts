import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutDependenciesNestedInput.schema'

const makeSchema = () => z.object({
  dependency: z.lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputObjectSchema).optional()
}).strict();
export const ProjectDependencyUpdateWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependentInput>;
export const ProjectDependencyUpdateWithoutDependentInputObjectZodSchema = makeSchema();
