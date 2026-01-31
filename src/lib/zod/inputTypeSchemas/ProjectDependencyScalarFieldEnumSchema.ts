import { z } from "zod";

export const ProjectDependencyScalarFieldEnumSchema = z.enum([
  "dependencyId",
  "dependentId",
]);

export default ProjectDependencyScalarFieldEnumSchema;
