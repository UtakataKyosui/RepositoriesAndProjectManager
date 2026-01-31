import * as z from 'zod';
// prettier-ignore
export const ProjectDependencyModelSchema = z.object({
    dependencyId: z.string(),
    dependency: z.unknown(),
    dependentId: z.string(),
    dependent: z.unknown()
}).strict();

export type ProjectDependencyPureType = z.infer<typeof ProjectDependencyModelSchema>;
