import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.string()
}).strict();
export const ProjectDependencyCreateManyDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyDependentInput>;
export const ProjectDependencyCreateManyDependentInputObjectZodSchema = makeSchema();
