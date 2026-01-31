import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const ProjectDependencyUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyMutationInput>;
export const ProjectDependencyUpdateManyMutationInputObjectZodSchema = makeSchema();
