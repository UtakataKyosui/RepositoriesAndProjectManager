import * as z from 'zod';
export const RoadmapGoalCreateResultSchema = z.object({
  id: z.string(),
  content: z.string(),
  order: z.number().int(),
  isCompleted: z.boolean(),
  roadmapId: z.string(),
  roadmap: z.unknown()
});