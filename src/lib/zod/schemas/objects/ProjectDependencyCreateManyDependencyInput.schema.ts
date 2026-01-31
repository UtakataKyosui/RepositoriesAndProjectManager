import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependentId: z.string()
}).strict();
export const ProjectDependencyCreateManyDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInput>;
export const ProjectDependencyCreateManyDependencyInputObjectZodSchema = makeSchema();
