import * as z from 'zod';
export const RoadmapGoalFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  content: z.string(),
  order: z.number().int(),
  isCompleted: z.boolean(),
  roadmapId: z.string(),
  roadmap: z.unknown()
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