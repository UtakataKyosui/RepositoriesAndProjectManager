import * as z from 'zod';
// prettier-ignore
export const RepositoryInputSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string().optional().nullable(),
    projectId: z.string(),
    project: z.unknown()
}).strict();

export type RepositoryInputType = z.infer<typeof RepositoryInputSchema>;
