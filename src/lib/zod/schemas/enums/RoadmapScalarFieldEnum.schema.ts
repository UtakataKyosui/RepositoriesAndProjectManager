import * as z from 'zod';

export const RoadmapScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'published', 'status', 'createdAt', 'updatedAt', 'userId'])

export type RoadmapScalarFieldEnum = z.infer<typeof RoadmapScalarFieldEnumSchema>;