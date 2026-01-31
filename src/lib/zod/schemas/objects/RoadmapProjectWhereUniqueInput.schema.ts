import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputObjectSchema as RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputObjectSchema } from './RoadmapProjectRoadmapIdProjectIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  roadmapId_projectId: z.lazy(() => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RoadmapProjectWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoadmapProjectWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectWhereUniqueInput>;
export const RoadmapProjectWhereUniqueInputObjectZodSchema = makeSchema();
