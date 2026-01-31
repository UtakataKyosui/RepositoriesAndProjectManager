import * as z from 'zod';
export const RoadmapProjectUpsertResultSchema = z.object({
  id: z.string(),
  order: z.number().int(),
  roadmapId: z.string(),
  roadmap: z.unknown(),
  projectId: z.string(),
  project: z.unknown()
});