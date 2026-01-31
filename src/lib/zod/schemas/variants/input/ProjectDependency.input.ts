import * as z from 'zod';
// prettier-ignore
export const ProjectDependencyInputSchema = z.object({
    dependencyId: z.string(),
    dependency: z.unknown(),
    dependentId: z.string(),
    dependent: z.unknown()
}).strict();

export type ProjectDependencyInputType = z.infer<typeof ProjectDependencyInputSchema>;
