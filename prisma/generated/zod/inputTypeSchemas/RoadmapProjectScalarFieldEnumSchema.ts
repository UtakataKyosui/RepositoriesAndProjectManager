import { z } from "zod";

export const RoadmapProjectScalarFieldEnumSchema = z.enum([
  "id",
  "order",
  "roadmapId",
  "projectId",
]);

export default RoadmapProjectScalarFieldEnumSchema;
