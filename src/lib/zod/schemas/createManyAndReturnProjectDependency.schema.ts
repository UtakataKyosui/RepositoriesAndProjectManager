import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyCreateManyInputObjectSchema as ProjectDependencyCreateManyInputObjectSchema } from './objects/ProjectDependencyCreateManyInput.schema';

export const ProjectDependencyCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectDependencyCreateManyAndReturnArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), data: z.union([ ProjectDependencyCreateManyInputObjectSchema, z.array(ProjectDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyAndReturnArgs>;

export const ProjectDependencyCreateManyAndReturnZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), data: z.union([ ProjectDependencyCreateManyInputObjectSchema, z.array(ProjectDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();