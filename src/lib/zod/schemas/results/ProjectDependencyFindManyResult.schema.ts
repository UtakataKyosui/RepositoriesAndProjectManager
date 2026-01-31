import * as z from 'zod';
export const ProjectDependencyFindManyResultSchema = z.object({
  data: z.array(z.object({
  dependencyId: z.string(),
  dependency: z.unknown(),
  dependentId: z.string(),
  dependent: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});