import { z } from "zod";

/////////////////////////////////////////
// ROADMAP SCHEMA
/////////////////////////////////////////

export const RoadmapSchema = z.object({
  id: z.cuid(),
  title: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
});

export type Roadmap = z.infer<typeof RoadmapSchema>;

export default RoadmapSchema;
