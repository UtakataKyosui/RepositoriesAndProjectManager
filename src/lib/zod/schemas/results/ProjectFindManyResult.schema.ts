import * as z from 'zod';
export const ProjectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  repositories: z.array(z.unknown()),
  dependencies: z.array(z.unknown()),
  dependents: z.array(z.unknown()),
  roadmapProjects: z.array(z.unknown())
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