import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const roadmapprojectscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema), z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  roadmapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoadmapProjectScalarWhereInputObjectSchema: z.ZodType<Prisma.RoadmapProjectScalarWhereInput> = roadmapprojectscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoadmapProjectScalarWhereInput>;
export const RoadmapProjectScalarWhereInputObjectZodSchema = roadmapprojectscalarwhereinputSchema;
