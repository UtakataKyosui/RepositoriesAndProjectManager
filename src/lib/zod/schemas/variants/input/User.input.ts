import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    roadmaps: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
