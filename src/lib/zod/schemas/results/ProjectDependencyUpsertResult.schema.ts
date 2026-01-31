import * as z from 'zod';
export const ProjectDependencyUpsertResultSchema = z.object({
  dependencyId: z.string(),
  dependency: z.unknown(),
  dependentId: z.string(),
  dependent: z.unknown()
});