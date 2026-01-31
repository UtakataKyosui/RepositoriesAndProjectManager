import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { RoadmapScalarRelationFilterObjectSchema as RoadmapScalarRelationFilterObjectSchema } from './RoadmapScalarRelationFilter.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const roadmapprojectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapProjectWhereInputObjectSchema), z.lazy(() => RoadmapProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapProjectWhereInputObjectSchema), z.lazy(() => RoadmapProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  roadmapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roadmap: z.union([z.lazy(() => RoadmapScalarRelationFilterObjectSchema), z.lazy(() => RoadmapWhereInputObjectSchema)]).optional(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const RoadmapProjectWhereInputObjectSchema: z.ZodType<Prisma.RoadmapProjectWhereInput> = roadmapprojectwhereinputSchema as unknown as z.ZodType<Prisma.RoadmapProjectWhereInput>;
export const RoadmapProjectWhereInputObjectZodSchema = roadmapprojectwhereinputSchema;
