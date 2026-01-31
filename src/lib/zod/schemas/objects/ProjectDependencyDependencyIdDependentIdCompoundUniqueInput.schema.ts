import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.string(),
  dependentId: z.string()
}).strict();
export const ProjectDependencyDependencyIdDependentIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProjectDependencyDependencyIdDependentIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyDependencyIdDependentIdCompoundUniqueInput>;
export const ProjectDependencyDependencyIdDependentIdCompoundUniqueInputObjectZodSchema = makeSchema();
