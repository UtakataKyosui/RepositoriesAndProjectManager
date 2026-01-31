import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectId: SortOrderSchema.optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RepositoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RepositoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryOrderByWithRelationInput>;
export const RepositoryOrderByWithRelationInputObjectZodSchema = makeSchema();
