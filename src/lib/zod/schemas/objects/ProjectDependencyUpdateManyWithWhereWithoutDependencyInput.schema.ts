import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyScalarWhereInputObjectSchema as ProjectDependencyScalarWhereInputObjectSchema } from './ProjectDependencyScalarWhereInput.schema';
import { ProjectDependencyUpdateManyMutationInputObjectSchema as ProjectDependencyUpdateManyMutationInputObjectSchema } from './ProjectDependencyUpdateManyMutationInput.schema';
import { ProjectDependencyUncheckedUpdateManyWithoutDependencyInputObjectSchema as ProjectDependencyUncheckedUpdateManyWithoutDependencyInputObjectSchema } from './ProjectDependencyUncheckedUpdateManyWithoutDependencyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectDependencyUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateManyWithoutDependencyInputObjectSchema)])
}).strict();
export const ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependencyInput>;
export const ProjectDependencyUpdateManyWithWhereWithoutDependencyInputObjectZodSchema = makeSchema();
