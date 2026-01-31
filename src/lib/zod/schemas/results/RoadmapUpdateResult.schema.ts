import * as z from 'zod';
export const RoadmapUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  goals: z.array(z.unknown()),
  projects: z.array(z.unknown())
}));