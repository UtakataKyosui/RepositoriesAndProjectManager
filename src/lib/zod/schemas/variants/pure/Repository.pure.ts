import * as z from 'zod';
// prettier-ignore
export const RepositoryModelSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string().nullable(),
    projectId: z.string(),
    project: z.unknown()
}).strict();

export type RepositoryPureType = z.infer<typeof RepositoryModelSchema>;
