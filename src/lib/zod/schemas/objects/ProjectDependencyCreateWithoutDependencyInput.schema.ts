import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutDependentsInputObjectSchema as ProjectCreateNestedOneWithoutDependentsInputObjectSchema } from './ProjectCreateNestedOneWithoutDependentsInput.schema'

const makeSchema = () => z.object({
  dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputObjectSchema)
}).strict();
export const ProjectDependencyCreateWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateWithoutDependencyInput>;
export const ProjectDependencyCreateWithoutDependencyInputObjectZodSchema = makeSchema();
