import * as z from 'zod';
export const RoadmapGoalAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    content: z.number(),
    order: z.number(),
    isCompleted: z.number(),
    roadmapId: z.number(),
    roadmap: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    order: z.number().int().nullable(),
    roadmapId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    order: z.number().int().nullable(),
    roadmapId: z.string().nullable()
  }).nullable().optional()});