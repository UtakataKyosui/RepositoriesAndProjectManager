import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencyCreateManyInputObjectSchema as ProjectDependencyCreateManyInputObjectSchema } from './objects/ProjectDependencyCreateManyInput.schema';

export const ProjectDependencyCreateManySchema: z.ZodType<Prisma.ProjectDependencyCreateManyArgs> = z.object({ data: z.union([ ProjectDependencyCreateManyInputObjectSchema, z.array(ProjectDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyArgs>;

export const ProjectDependencyCreateManyZodSchema = z.object({ data: z.union([ ProjectDependencyCreateManyInputObjectSchema, z.array(ProjectDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();