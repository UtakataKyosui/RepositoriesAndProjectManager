import * as z from 'zod';

export const ProjectDependencyScalarFieldEnumSchema = z.enum(['dependencyId', 'dependentId'])

export type ProjectDependencyScalarFieldEnum = z.infer<typeof ProjectDependencyScalarFieldEnumSchema>;