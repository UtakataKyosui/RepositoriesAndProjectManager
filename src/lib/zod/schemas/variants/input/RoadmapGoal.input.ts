import * as z from 'zod';
// prettier-ignore
export const RoadmapGoalInputSchema = z.object({
    id: z.string(),
    content: z.string(),
    order: z.number().int(),
    isCompleted: z.boolean(),
    roadmapId: z.string(),
    roadmap: z.unknown()
}).strict();

export type RoadmapGoalInputType = z.infer<typeof RoadmapGoalInputSchema>;
