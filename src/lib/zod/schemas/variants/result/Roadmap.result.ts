import * as z from 'zod';
import { ProjectStatusSchema } from '../../enums/ProjectStatus.schema';
// prettier-ignore
export const RoadmapResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    published: z.boolean(),
    status: ProjectStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    goals: z.array(z.unknown()),
    projects: z.array(z.unknown())
}).strict();

export type RoadmapResultType = z.infer<typeof RoadmapResultSchema>;
