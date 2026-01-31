import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.string(),
  dependentId: z.string()
}).strict();
export const ProjectDependencyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedCreateInput>;
export const ProjectDependencyUncheckedCreateInputObjectZodSchema = makeSchema();
