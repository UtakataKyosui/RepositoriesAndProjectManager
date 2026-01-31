import * as z from 'zod';
// prettier-ignore
export const RoadmapProjectResultSchema = z.object({
    id: z.string(),
    order: z.number().int(),
    roadmapId: z.string(),
    roadmap: z.unknown(),
    projectId: z.string(),
    project: z.unknown()
}).strict();

export type RoadmapProjectResultType = z.infer<typeof RoadmapProjectResultSchema>;
