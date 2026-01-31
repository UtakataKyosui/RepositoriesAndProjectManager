import * as z from 'zod';
import { ProjectStatusSchema } from '../../enums/ProjectStatus.schema';
// prettier-ignore
export const ProjectInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean(),
    status: ProjectStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    repositories: z.array(z.unknown()),
    dependencies: z.array(z.unknown()),
    dependents: z.array(z.unknown()),
    roadmapProjects: z.array(z.unknown())
}).strict();

export type ProjectInputType = z.infer<typeof ProjectInputSchema>;
