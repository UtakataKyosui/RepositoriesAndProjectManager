import * as z from 'zod';

export const RoadmapGoalScalarFieldEnumSchema = z.enum(['id', 'content', 'order', 'isCompleted', 'roadmapId'])

export type RoadmapGoalScalarFieldEnum = z.infer<typeof RoadmapGoalScalarFieldEnumSchema>;