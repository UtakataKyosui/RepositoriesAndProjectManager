import * as z from 'zod';
import { ProjectStatusSchema } from '../../enums/ProjectStatus.schema';
// prettier-ignore
export const RoadmapInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean(),
    status: ProjectStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    goals: z.array(z.unknown()),
    projects: z.array(z.unknown())
}).strict();

export type RoadmapInputType = z.infer<typeof RoadmapInputSchema>;
