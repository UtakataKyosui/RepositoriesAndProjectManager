import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectWhereInputObjectSchema as RoadmapProjectWhereInputObjectSchema } from './RoadmapProjectWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectWhereInputObjectSchema).optional()
}).strict();
export const RoadmapCountOutputTypeCountProjectsArgsObjectSchema = makeSchema();
export const RoadmapCountOutputTypeCountProjectsArgsObjectZodSchema = makeSchema();
