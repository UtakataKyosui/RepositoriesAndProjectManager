import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.string()
}).strict();
export const ProjectDependencyUncheckedCreateWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependentInput>;
export const ProjectDependencyUncheckedCreateWithoutDependentInputObjectZodSchema = makeSchema();
