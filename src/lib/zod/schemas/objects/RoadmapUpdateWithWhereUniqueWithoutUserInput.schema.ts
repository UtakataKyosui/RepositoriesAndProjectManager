import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapUpdateWithoutUserInputObjectSchema as RoadmapUpdateWithoutUserInputObjectSchema } from './RoadmapUpdateWithoutUserInput.schema';
import { RoadmapUncheckedUpdateWithoutUserInputObjectSchema as RoadmapUncheckedUpdateWithoutUserInputObjectSchema } from './RoadmapUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoadmapUpdateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const RoadmapUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateWithWhereUniqueWithoutUserInput>;
export const RoadmapUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
