import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.string(),
  dependentId: z.string()
}).strict();
export const ProjectDependencyCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyInput>;
export const ProjectDependencyCreateManyInputObjectZodSchema = makeSchema();
