import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './objects/ProjectDependencyInclude.schema';
import { ProjectDependencyCreateInputObjectSchema as ProjectDependencyCreateInputObjectSchema } from './objects/ProjectDependencyCreateInput.schema';
import { ProjectDependencyUncheckedCreateInputObjectSchema as ProjectDependencyUncheckedCreateInputObjectSchema } from './objects/ProjectDependencyUncheckedCreateInput.schema';

export const ProjectDependencyCreateOneSchema: z.ZodType<Prisma.ProjectDependencyCreateArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), data: z.union([ProjectDependencyCreateInputObjectSchema, ProjectDependencyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyCreateArgs>;

export const ProjectDependencyCreateOneZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), data: z.union([ProjectDependencyCreateInputObjectSchema, ProjectDependencyUncheckedCreateInputObjectSchema]) }).strict();