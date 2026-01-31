import * as z from 'zod';
// prettier-ignore
export const ProjectDependencyResultSchema = z.object({
    dependencyId: z.string(),
    dependency: z.unknown(),
    dependentId: z.string(),
    dependent: z.unknown()
}).strict();

export type ProjectDependencyResultType = z.infer<typeof ProjectDependencyResultSchema>;
