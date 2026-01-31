import { z } from "zod";

/////////////////////////////////////////
// ROADMAP GOAL SCHEMA
/////////////////////////////////////////

export const RoadmapGoalSchema = z.object({
  id: z.cuid(),
  content: z.string(),
  order: z.number().int(),
  isCompleted: z.boolean(),
  roadmapId: z.string(),
});

export type RoadmapGoal = z.infer<typeof RoadmapGoalSchema>;

export default RoadmapGoalSchema;
