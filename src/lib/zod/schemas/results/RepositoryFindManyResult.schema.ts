import * as z from 'zod';
export const RepositoryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  url: z.string(),
  name: z.string().optional(),
  projectId: z.string(),
  project: z.unknown()
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