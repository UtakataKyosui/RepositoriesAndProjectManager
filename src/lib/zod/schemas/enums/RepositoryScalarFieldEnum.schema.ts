import * as z from 'zod';

export const RepositoryScalarFieldEnumSchema = z.enum(['id', 'url', 'name', 'projectId'])

export type RepositoryScalarFieldEnum = z.infer<typeof RepositoryScalarFieldEnumSchema>;