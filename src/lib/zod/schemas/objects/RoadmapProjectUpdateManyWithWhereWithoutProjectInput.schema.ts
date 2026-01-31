import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapProjectScalarWhereInputObjectSchema as RoadmapProjectScalarWhereInputObjectSchema } from './RoadmapProjectScalarWhereInput.schema';
import { RoadmapProjectUpdateManyMutationInputObjectSchema as RoadmapProjectUpdateManyMutationInputObjectSchema } from './RoadmapProjectUpdateManyMutationInput.schema';
import { RoadmapProjectUncheckedUpdateManyWithoutProjectInputObjectSchema as RoadmapProjectUncheckedUpdateManyWithoutProjectInputObjectSchema } from './RoadmapProjectUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapProjectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapProjectUpdateManyMutationInputObjectSchema), z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutProjectInput>;
export const RoadmapProjectUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
