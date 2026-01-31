import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './RoadmapProjectWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoadmapProjectWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoadmapProjectWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoadmapProjectWhereInputObjectSchema).optional()
}).strict();
export const RoadmapProjectListRelationFilterObjectSchema: z.ZodType<Prisma.RoadmapProjectListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectListRelationFilter>;
export const RoadmapProjectListRelationFilterObjectZodSchema = makeSchema();
