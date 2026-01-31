import * as z from 'zod';
export const ProjectUpsertResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  repositories: z.array(z.unknown()),
  dependencies: z.array(z.unknown()),
  dependents: z.array(z.unknown()),
  roadmapProjects: z.array(z.unknown())
});