import * as z from 'zod';
export const RoadmapProjectGroupByResultSchema = z.array(z.object({
  id: z.string(),
  order: z.number().int(),
  roadmapId: z.string(),
  projectId: z.string(),
  _count: z.object({
    id: z.number(),
    order: z.number(),
    roadmapId: z.number(),
    roadmap: z.number(),
    projectId: z.number(),
    project: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    order: z.number().int().nullable(),
    roadmapId: z.string().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    order: z.number().int().nullable(),
    roadmapId: z.string().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional()
}));