import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.literal(true).optional(),
  dependentId: z.literal(true).optional()
}).strict();
export const ProjectDependencyMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyMaxAggregateInputType>;
export const ProjectDependencyMaxAggregateInputObjectZodSchema = makeSchema();
