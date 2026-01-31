import { z } from "zod";

/////////////////////////////////////////
// PROJECT DEPENDENCY SCHEMA
/////////////////////////////////////////

export const ProjectDependencySchema = z.object({
  dependencyId: z.string(),
  dependentId: z.string(),
});

export type ProjectDependency = z.infer<typeof ProjectDependencySchema>;

export default ProjectDependencySchema;
