import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'published', 'status', 'createdAt', 'updatedAt', 'userId'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;