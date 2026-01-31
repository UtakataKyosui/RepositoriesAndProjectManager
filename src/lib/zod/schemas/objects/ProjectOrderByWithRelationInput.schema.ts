import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RepositoryOrderByRelationAggregateInputObjectSchema as RepositoryOrderByRelationAggregateInputObjectSchema } from './RepositoryOrderByRelationAggregateInput.schema';
import { ProjectDependencyOrderByRelationAggregateInputObjectSchema as ProjectDependencyOrderByRelationAggregateInputObjectSchema } from './ProjectDependencyOrderByRelationAggregateInput.schema';
import { RoadmapProjectOrderByRelationAggregateInputObjectSchema as RoadmapProjectOrderByRelationAggregateInputObjectSchema } from './RoadmapProjectOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  published: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  repositories: z.lazy(() => RepositoryOrderByRelationAggregateInputObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyOrderByRelationAggregateInputObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyOrderByRelationAggregateInputObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = makeSchema();
