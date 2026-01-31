import { z } from "zod";

export const RoadmapGoalScalarFieldEnumSchema = z.enum([
  "id",
  "content",
  "order",
  "isCompleted",
  "roadmapId",
]);

export default RoadmapGoalScalarFieldEnumSchema;
