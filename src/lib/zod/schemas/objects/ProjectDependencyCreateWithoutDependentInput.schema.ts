import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutDependenciesInputObjectSchema as ProjectCreateNestedOneWithoutDependenciesInputObjectSchema } from './ProjectCreateNestedOneWithoutDependenciesInput.schema'

const makeSchema = () => z.object({
  dependency: z.lazy(() => ProjectCreateNestedOneWithoutDependenciesInputObjectSchema)
}).strict();
export const ProjectDependencyCreateWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateWithoutDependentInput>;
export const ProjectDependencyCreateWithoutDependentInputObjectZodSchema = makeSchema();
