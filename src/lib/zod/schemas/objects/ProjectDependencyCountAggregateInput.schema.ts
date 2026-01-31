import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dependencyId: z.literal(true).optional(),
  dependentId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProjectDependencyCountAggregateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCountAggregateInputType>;
export const ProjectDependencyCountAggregateInputObjectZodSchema = makeSchema();
