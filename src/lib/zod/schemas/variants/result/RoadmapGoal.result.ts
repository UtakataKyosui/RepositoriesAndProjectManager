import * as z from 'zod';
// prettier-ignore
export const RoadmapGoalResultSchema = z.object({
    id: z.string(),
    content: z.string(),
    order: z.number().int(),
    isCompleted: z.boolean(),
    roadmapId: z.string(),
    roadmap: z.unknown()
}).strict();

export type RoadmapGoalResultType = z.infer<typeof RoadmapGoalResultSchema>;
