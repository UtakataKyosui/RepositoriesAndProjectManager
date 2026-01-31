import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RoadmapWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RoadmapWhereInputObjectSchema).optional()
}).strict();
export const RoadmapScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoadmapScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapScalarRelationFilter>;
export const RoadmapScalarRelationFilterObjectZodSchema = makeSchema();
