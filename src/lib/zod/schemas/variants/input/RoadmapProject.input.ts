import * as z from 'zod';
// prettier-ignore
export const RoadmapProjectInputSchema = z.object({
    id: z.string(),
    order: z.number().int(),
    roadmapId: z.string(),
    roadmap: z.unknown(),
    projectId: z.string(),
    project: z.unknown()
}).strict();

export type RoadmapProjectInputType = z.infer<typeof RoadmapProjectInputSchema>;
