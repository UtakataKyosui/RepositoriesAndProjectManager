import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectDependencyIncludeObjectSchema as ProjectDependencyIncludeObjectSchema } from './objects/ProjectDependencyInclude.schema';
import { ProjectDependencyOrderByWithRelationInputObjectSchema as ProjectDependencyOrderByWithRelationInputObjectSchema } from './objects/ProjectDependencyOrderByWithRelationInput.schema';
import { ProjectDependencyWhereInputObjectSchema as ProjectDependencyWhereInputObjectSchema } from './objects/ProjectDependencyWhereInput.schema';
import { ProjectDependencyWhereUniqueInputObjectSchema as ProjectDependencyWhereUniqueInputObjectSchema } from './objects/ProjectDependencyWhereUniqueInput.schema';
import { ProjectDependencyScalarFieldEnumSchema } from './enums/ProjectDependencyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectDependencyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProjectDependencySelect> = z.object({
    dependencyId: z.boolean().optional(),
    dependency: z.boolean().optional(),
    dependentId: z.boolean().optional(),
    dependent: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectDependencySelect>;

export const ProjectDependencyFindFirstOrThrowSelectZodSchema = z.object({
    dependencyId: z.boolean().optional(),
    dependency: z.boolean().optional(),
    dependentId: z.boolean().optional(),
    dependent: z.boolean().optional()
  }).strict();

export const ProjectDependencyFindFirstOrThrowSchema: z.ZodType<Prisma.ProjectDependencyFindFirstOrThrowArgs> = z.object({ select: ProjectDependencyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProjectDependencyIncludeObjectSchema.optional()), orderBy: z.union([ProjectDependencyOrderByWithRelationInputObjectSchema, ProjectDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectDependencyWhereInputObjectSchema.optional(), cursor: ProjectDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectDependencyScalarFieldEnumSchema, ProjectDependencyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDependencyFindFirstOrThrowArgs>;

export const ProjectDependencyFindFirstOrThrowZodSchema = z.object({ select: ProjectDependencyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProjectDependencyIncludeObjectSchema.optional()), orderBy: z.union([ProjectDependencyOrderByWithRelationInputObjectSchema, ProjectDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectDependencyWhereInputObjectSchema.optional(), cursor: ProjectDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectDependencyScalarFieldEnumSchema, ProjectDependencyScalarFieldEnumSchema.array()]).optional() }).strict();