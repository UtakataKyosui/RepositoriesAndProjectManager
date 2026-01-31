import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependentId: z.string()
}).strict();
export const ProjectDependencyUncheckedCreateWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependencyInput>;
export const ProjectDependencyUncheckedCreateWithoutDependencyInputObjectZodSchema = makeSchema();
