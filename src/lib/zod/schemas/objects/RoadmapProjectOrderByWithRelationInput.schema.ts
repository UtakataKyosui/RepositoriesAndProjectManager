import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoadmapOrderByWithRelationInputObjectSchema as RoadmapOrderByWithRelationInputObjectSchema } from './RoadmapOrderByWithRelationInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  roadmapId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  roadmap: z.lazy(() => RoadmapOrderByWithRelationInputObjectSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RoadmapProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectOrderByWithRelationInput>;
export const RoadmapProjectOrderByWithRelationInputObjectZodSchema = makeSchema();
