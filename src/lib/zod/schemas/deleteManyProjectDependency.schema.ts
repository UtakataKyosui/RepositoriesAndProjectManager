import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './objects/ProjectDependencyWhereInput.schema';

export const ProjectDependencyDeleteManySchema: z.ZodType<Prisma.ProjectDependencyDeleteManyArgs> = z.object({ where: ProjectDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyDeleteManyArgs>;

export const ProjectDependencyDeleteManyZodSchema = z.object({ where: ProjectDependencyWhereInputObjectSchema.optional() }).strict();