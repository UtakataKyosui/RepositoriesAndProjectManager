import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositoryIncludeObjectSchema as RepositoryIncludeObjectSchema } from './objects/RepositoryInclude.schema';
import { RepositoryOrderByWithRelationInputObjectSchema as RepositoryOrderByWithRelationInputObjectSchema } from './objects/RepositoryOrderByWithRelationInput.schema';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './objects/RepositoryWhereInput.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './objects/RepositoryWhereUniqueInput.schema';
import { RepositoryScalarFieldEnumSchema } from './enums/RepositoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RepositoryFindManySelectSchema: z.ZodType<Prisma.RepositorySelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RepositorySelect>;

export const RepositoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict();

export const RepositoryFindManySchema: z.ZodType<Prisma.RepositoryFindManyArgs> = z.object({ select: RepositoryFindManySelectSchema.optional(), include: z.lazy(() => RepositoryIncludeObjectSchema.optional()), orderBy: z.union([RepositoryOrderByWithRelationInputObjectSchema, RepositoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: RepositoryWhereInputObjectSchema.optional(), cursor: RepositoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RepositoryScalarFieldEnumSchema, RepositoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryFindManyArgs>;

export const RepositoryFindManyZodSchema = z.object({ select: RepositoryFindManySelectSchema.optional(), include: z.lazy(() => RepositoryIncludeObjectSchema.optional()), orderBy: z.union([RepositoryOrderByWithRelationInputObjectSchema, RepositoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: RepositoryWhereInputObjectSchema.optional(), cursor: RepositoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RepositoryScalarFieldEnumSchema, RepositoryScalarFieldEnumSchema.array()]).optional() }).strict();