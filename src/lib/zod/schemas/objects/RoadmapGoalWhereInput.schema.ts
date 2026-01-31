import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { RoadmapScalarRelationFilterObjectSchema as RoadmapScalarRelationFilterObjectSchema } from './RoadmapScalarRelationFilter.schema';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const roadmapgoalwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapGoalWhereInputObjectSchema), z.lazy(() => RoadmapGoalWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapGoalWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapGoalWhereInputObjectSchema), z.lazy(() => RoadmapGoalWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isCompleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  roadmapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roadmap: z.union([z.lazy(() => RoadmapScalarRelationFilterObjectSchema), z.lazy(() => RoadmapWhereInputObjectSchema)]).optional()
}).strict();
export const RoadmapGoalWhereInputObjectSchema: z.ZodType<Prisma.RoadmapGoalWhereInput> = roadmapgoalwhereinputSchema as unknown as z.ZodType<Prisma.RoadmapGoalWhereInput>;
export const RoadmapGoalWhereInputObjectZodSchema = roadmapgoalwhereinputSchema;
