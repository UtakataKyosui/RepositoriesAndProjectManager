import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RepositoryOrderByWithRelationInputObjectSchema as RepositoryOrderByWithRelationInputObjectSchema } from './objects/RepositoryOrderByWithRelationInput.schema';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './objects/RepositoryWhereInput.schema';
import { RepositoryWhereUniqueInputObjectSchema as RepositoryWhereUniqueInputObjectSchema } from './objects/RepositoryWhereUniqueInput.schema';
import { RepositoryCountAggregateInputObjectSchema as RepositoryCountAggregateInputObjectSchema } from './objects/RepositoryCountAggregateInput.schema';

export const RepositoryCountSchema: z.ZodType<Prisma.RepositoryCountArgs> = z.object({ orderBy: z.union([RepositoryOrderByWithRelationInputObjectSchema, RepositoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: RepositoryWhereInputObjectSchema.optional(), cursor: RepositoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RepositoryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RepositoryCountArgs>;

export const RepositoryCountZodSchema = z.object({ orderBy: z.union([RepositoryOrderByWithRelationInputObjectSchema, RepositoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: RepositoryWhereInputObjectSchema.optional(), cursor: RepositoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RepositoryCountAggregateInputObjectSchema ]).optional() }).strict();