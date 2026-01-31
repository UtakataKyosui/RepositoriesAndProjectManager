import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencySelectObjectSchema as ProjectDependencySelectObjectSchema } from './objects/ProjectDependencySelect.schema';
import { ProjectDependencyUpdateManyMutationInputObjectSchema as ProjectDependencyUpdateManyMutationInputObjectSchema } from './objects/ProjectDependencyUpdateManyMutationInput.schema';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './objects/ProjectDependencyWhereInput.schema';

export const ProjectDependencyUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyAndReturnArgs> = z.object({ select: ProjectDependencySelectObjectSchema.optional(), data: ProjectDependencyUpdateManyMutationInputObjectSchema, where: ProjectDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyUpdateManyAndReturnArgs>;

export const ProjectDependencyUpdateManyAndReturnZodSchema = z.object({ select: ProjectDependencySelectObjectSchema.optional(), data: ProjectDependencyUpdateManyMutationInputObjectSchema, where: ProjectDependencyWhereInputObjectSchema.optional() }).strict();