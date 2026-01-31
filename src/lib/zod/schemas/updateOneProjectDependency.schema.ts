import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './objects/ProjectDependencyInclude.schema';
import { ProjectDependencyUpdateInputObjectSchema as ProjectDependencyUpdateInputObjectSchema } from './objects/ProjectDependencyUpdateInput.schema';
import { ProjectDependencyUncheckedUpdateInputObjectSchema as ProjectDependencyUncheckedUpdateInputObjectSchema } from './objects/ProjectDependencyUncheckedUpdateInput.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './objects/ProjectDependencyWhereUniqueInput.schema';

export const ProjectDependencyUpdateOneSchema: z.ZodType<Prisma.ProjectDependencyUpdateArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), data: z.union([ProjectDependencyUpdateInputObjectSchema, ProjectDependencyUncheckedUpdateInputObjectSchema]), where: ProjectDependencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateArgs>;

export const ProjectDependencyUpdateOneZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), data: z.union([ProjectDependencyUpdateInputObjectSchema, ProjectDependencyUncheckedUpdateInputObjectSchema]), where: ProjectDependencyWhereUniqueInputObjectSchema }).strict();