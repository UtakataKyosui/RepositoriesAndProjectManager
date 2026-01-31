import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapCreateWithoutUserInputObjectSchema as RoadmapCreateWithoutUserInputObjectSchema } from './RoadmapCreateWithoutUserInput.schema';
import { RoadmapUncheckedCreateWithoutUserInputObjectSchema as RoadmapUncheckedCreateWithoutUserInputObjectSchema } from './RoadmapUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoadmapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoadmapCreateWithoutUserInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RoadmapCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapCreateOrConnectWithoutUserInput>;
export const RoadmapCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
