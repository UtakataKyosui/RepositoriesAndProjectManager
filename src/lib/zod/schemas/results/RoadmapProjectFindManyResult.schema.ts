import * as z from 'zod';
export const RoadmapProjectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  order: z.number().int(),
  roadmapId: z.string(),
  roadmap: z.unknown(),
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