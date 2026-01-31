import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereInputObjectSchema as RoadmapWhereInputObjectSchema } from './RoadmapWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountRoadmapsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountRoadmapsArgsObjectZodSchema = makeSchema();
