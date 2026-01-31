import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.literal(true).optional(),
  dependentId: z.literal(true).optional()
}).strict();
export const ProjectDependencyMinAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyMinAggregateInputType>;
export const ProjectDependencyMinAggregateInputObjectZodSchema = makeSchema();
