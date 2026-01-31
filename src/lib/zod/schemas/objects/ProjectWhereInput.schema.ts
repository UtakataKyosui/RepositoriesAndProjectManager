import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumProjectStatusFilterObjectSchema as EnumProjectStatusFilterObjectSchema } from './EnumProjectStatusFilter.schema';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { RepositoryListRelationFilterObjectSchema as RepositoryListRelationFilterObjectSchema } from './RepositoryListRelationFilter.schema';
import { ProjectDependencyListRelationFilterObjectSchema as ProjectDependencyListRelationFilterObjectSchema } from './ProjectDependencyListRelationFilter.schema';
import { RoadmapProjectListRelationFilterObjectSchema as RoadmapProjectListRelationFilterObjectSchema } from './RoadmapProjectListRelationFilter.schema'

const projectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumProjectStatusFilterObjectSchema), ProjectStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  repositories: z.lazy(() => RepositoryListRelationFilterObjectSchema).optional(),
  dependencies: z.lazy(() => ProjectDependencyListRelationFilterObjectSchema).optional(),
  dependents: z.lazy(() => ProjectDependencyListRelationFilterObjectSchema).optional(),
  roadmapProjects: z.lazy(() => RoadmapProjectListRelationFilterObjectSchema).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;
