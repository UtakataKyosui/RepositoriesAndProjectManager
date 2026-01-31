import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  roadmapId: z.string(),
  projectId: z.string()
}).strict();
export const RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RoadmapProjectRoadmapIdProjectIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectRoadmapIdProjectIdCompoundUniqueInput>;
export const RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputObjectZodSchema = makeSchema();
