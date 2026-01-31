import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapScalarWhereInputObjectSchema as RoadmapScalarWhereInputObjectSchema } from './RoadmapScalarWhereInput.schema';
import { RoadmapUpdateManyMutationInputObjectSchema as RoadmapUpdateManyMutationInputObjectSchema } from './RoadmapUpdateManyMutationInput.schema';
import { RoadmapUncheckedUpdateManyWithoutUserInputObjectSchema as RoadmapUncheckedUpdateManyWithoutUserInputObjectSchema } from './RoadmapUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapUpdateManyMutationInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const RoadmapUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateManyWithWhereWithoutUserInput>;
export const RoadmapUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
