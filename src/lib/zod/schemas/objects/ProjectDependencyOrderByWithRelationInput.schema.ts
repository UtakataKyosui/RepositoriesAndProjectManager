import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  dependencyId: SortOrderSchema.optional(),
  dependentId: SortOrderSchema.optional(),
  dependency: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  dependent: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProjectDependencyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyOrderByWithRelationInput>;
export const ProjectDependencyOrderByWithRelationInputObjectZodSchema = makeSchema();
