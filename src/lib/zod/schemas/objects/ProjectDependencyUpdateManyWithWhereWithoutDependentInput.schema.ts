import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyScalarWhereInputObjectSchema as ProjectDependencyScalarWhereInputObjectSchema } from './ProjectDependencyScalarWhereInput.schema';
import { ProjectDependencyUpdateManyMutationInputObjectSchema as ProjectDependencyUpdateManyMutationInputObjectSchema } from './ProjectDependencyUpdateManyMutationInput.schema';
import { ProjectDependencyUncheckedUpdateManyWithoutDependentInputObjectSchema as ProjectDependencyUncheckedUpdateManyWithoutDependentInputObjectSchema } from './ProjectDependencyUncheckedUpdateManyWithoutDependentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectDependencyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectDependencyUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectDependencyUncheckedUpdateManyWithoutDependentInputObjectSchema)])
}).strict();
export const ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependentInput>;
export const ProjectDependencyUpdateManyWithWhereWithoutDependentInputObjectZodSchema = makeSchema();
