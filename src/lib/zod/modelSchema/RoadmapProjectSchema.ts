import { z } from "zod";

/////////////////////////////////////////
// ROADMAP PROJECT SCHEMA
/////////////////////////////////////////

export const RoadmapProjectSchema = z.object({
  id: z.cuid(),
  order: z.number().int(),
  roadmapId: z.string(),
  projectId: z.string(),
});

export type RoadmapProject = z.infer<typeof RoadmapProjectSchema>;

export default RoadmapProjectSchema;
