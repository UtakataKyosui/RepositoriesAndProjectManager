import { z } from "zod";

export const ProjectScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "published",
  "createdAt",
  "updatedAt",
  "userId",
]);

export default ProjectScalarFieldEnumSchema;
