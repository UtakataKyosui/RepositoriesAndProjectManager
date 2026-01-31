import * as z from 'zod';
export const RepositoryGroupByResultSchema = z.array(z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  projectId: z.string(),
  _count: z.object({
    id: z.number(),
    url: z.number(),
    name: z.number(),
    projectId: z.number(),
    project: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    name: z.string().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    name: z.string().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional()
}));