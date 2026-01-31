import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './objects/ProjectDependencyInclude.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './objects/ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyCreateInputObjectSchema as ProjectDependencyCreateInputObjectSchema } from './objects/ProjectDependencyCreateInput.schema';
import { ProjectDependencyUncheckedCreateInputObjectSchema as ProjectDependencyUncheckedCreateInputObjectSchema } from './objects/ProjectDependencyUncheckedCreateInput.schema';
import { ProjectDependencyUpdateInputObjectSchema as ProjectDependencyUpdateInputObjectSchema } from './objects/ProjectDependencyUpdateInput.schema';
import { ProjectDependencyUncheckedUpdateInputObjectSchema as ProjectDependencyUncheckedUpdateInputObjectSchema } from './objects/ProjectDependencyUncheckedUpdateInput.schema';

export const ProjectDependencyUpsertOneSchema: z.ZodType<Prisma.ProjectDependencyUpsertArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), where: ProjectDependencyWhereUniqueInputObjectSchema, create: z.union([ ProjectDependencyCreateInputObjectSchema, ProjectDependencyUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectDependencyUpdateInputObjectSchema, ProjectDependencyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyUpsertArgs>;

export const ProjectDependencyUpsertOneZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), include: ProjectDependencyIncludeObjectSchema.optional(), where: ProjectDependencyWhereUniqueInputObjectSchema, create: z.union([ ProjectDependencyCreateInputObjectSchema, ProjectDependencyUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectDependencyUpdateInputObjectSchema, ProjectDependencyUncheckedUpdateInputObjectSchema ]) }).strict();