import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const roadmapgoalscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema), z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema), z.lazy(() => RoadmapGoalScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isCompleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  roadmapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapGoalScalarWhereInputObjectSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereInput> = roadmapgoalscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoadmapGoalScalarWhereInput>;
export const RoadmapGoalScalarWhereInputObjectZodSchema = roadmapgoalscalarwhereinputSchema;
