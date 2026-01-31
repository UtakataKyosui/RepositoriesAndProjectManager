import * as z from 'zod';
// prettier-ignore
export const RepositoryResultSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string().nullable(),
    projectId: z.string(),
    project: z.unknown()
}).strict();

export type RepositoryResultType = z.infer<typeof RepositoryResultSchema>;
