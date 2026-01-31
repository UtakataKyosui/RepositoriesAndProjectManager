import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoadmapWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoadmapWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoadmapWhereInputObjectSchema).optional()
}).strict();
export const RoadmapListRelationFilterObjectSchema: z.ZodType<Prisma.RoadmapListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapListRelationFilter>;
export const RoadmapListRelationFilterObjectZodSchema = makeSchema();
