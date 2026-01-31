import * as z from 'zod';

export const RoadmapProjectScalarFieldEnumSchema = z.enum(['id', 'order', 'roadmapId', 'projectId'])

export type RoadmapProjectScalarFieldEnum = z.infer<typeof RoadmapProjectScalarFieldEnumSchema>;