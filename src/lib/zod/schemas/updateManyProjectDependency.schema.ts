import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencyUpdateManyMutationInputObjectSchema as ProjectDependencyUpdateManyMutationInputObjectSchema } from './objects/ProjectDependencyUpdateManyMutationInput.schema';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './objects/ProjectDependencyWhereInput.schema';

export const ProjectDependencyUpdateManySchema: z.ZodType<Prisma.ProjectDependencyUpdateManyArgs> = z.object({ data: ProjectDependencyUpdateManyMutationInputObjectSchema, where: ProjectDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyArgs>;

export const ProjectDependencyUpdateManyZodSchema = z.object({ data: ProjectDependencyUpdateManyMutationInputObjectSchema, where: ProjectDependencyWhereInputObjectSchema.optional() }).strict();