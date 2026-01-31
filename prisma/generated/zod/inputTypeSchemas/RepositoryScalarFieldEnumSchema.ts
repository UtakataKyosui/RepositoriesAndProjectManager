import { z } from "zod";

export const RepositoryScalarFieldEnumSchema = z.enum([
  "id",
  "url",
  "name",
  "projectId",
]);

export default RepositoryScalarFieldEnumSchema;
