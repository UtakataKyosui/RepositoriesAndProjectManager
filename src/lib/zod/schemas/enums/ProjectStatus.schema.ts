import * as z from 'zod';

export const ProjectStatusSchema = z.enum(['TODO', 'IN_PROGRESS', 'DONE'])

export type ProjectStatus = z.infer<typeof ProjectStatusSchema>;