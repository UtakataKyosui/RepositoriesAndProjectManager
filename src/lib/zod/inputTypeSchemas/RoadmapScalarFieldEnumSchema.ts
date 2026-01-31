import { z } from "zod";

export const RoadmapScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "createdAt",
  "updatedAt",
  "userId",
]);

export default RoadmapScalarFieldEnumSchema;
