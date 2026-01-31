import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './objects/ProjectDependencyInclude.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './objects/ProjectDependencyWhereUniqueInput.schema';

export const ProjectDependencyDeleteOneSchema: z.ZodType<Prisma.ProjectDependencyDeleteArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), where: ProjectDependencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyDeleteArgs>;

export const ProjectDependencyDeleteOneZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), where: ProjectDependencyWhereUniqueInputObjectSchema }).strict();