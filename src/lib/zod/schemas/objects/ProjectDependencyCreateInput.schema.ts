import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutDependenciesInputObjectSchema as ProjectCreateNestedOneWithoutDependenciesInputObjectSchema } from './ProjectCreateNestedOneWithoutDependenciesInput.schema';
import { ProjectCreateNestedOneWithoutDependentsInputObjectSchema as ProjectCreateNestedOneWithoutDependentsInputObjectSchema } from './ProjectCreateNestedOneWithoutDependentsInput.schema'

const makeSchema = () => z.object({
  dependency: z.lazy(() => ProjectCreateNestedOneWithoutDependenciesInputObjectSchema),
  dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputObjectSchema)
}).strict();
export const ProjectDependencyCreateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateInput>;
export const ProjectDependencyCreateInputObjectZodSchema = makeSchema();
