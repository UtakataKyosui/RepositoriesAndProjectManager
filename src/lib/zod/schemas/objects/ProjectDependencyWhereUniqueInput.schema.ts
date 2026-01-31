import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyDependencyIdDependentIdCompoundUniqueInputObjectSchema as ProjectDependencyDependencyIdDependentIdCompoundUniqueInputObjectSchema } from './ProjectDependencyDependencyIdDependentIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  dependencyId_dependentId: z.lazy(() => ProjectDependencyDependencyIdDependentIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ProjectDependencyWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProjectDependencyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyWhereUniqueInput>;
export const ProjectDependencyWhereUniqueInputObjectZodSchema = makeSchema();
