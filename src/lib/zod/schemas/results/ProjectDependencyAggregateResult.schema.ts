import * as z from 'zod';
export const ProjectDependencyAggregateResultSchema = z.object({  _count: z.object({
    dependencyId: z.number(),
    dependency: z.number(),
    dependentId: z.number(),
    dependent: z.number()
  }).optional(),
  _min: z.object({
    dependencyId: z.string().nullable(),
    dependentId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    dependencyId: z.string().nullable(),
    dependentId: z.string().nullable()
  }).nullable().optional()});