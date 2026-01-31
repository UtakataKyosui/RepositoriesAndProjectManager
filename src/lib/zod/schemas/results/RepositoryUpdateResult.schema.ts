import * as z from 'zod';
export const RepositoryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  url: z.string(),
  name: z.string().optional(),
  projectId: z.string(),
  project: z.unknown()
}));