import * as z from 'zod';
export const ProjectDependencyCreateResultSchema = z.object({
  dependencyId: z.string(),
  dependency: z.unknown(),
  dependentId: z.string(),
  dependent: z.unknown()
});