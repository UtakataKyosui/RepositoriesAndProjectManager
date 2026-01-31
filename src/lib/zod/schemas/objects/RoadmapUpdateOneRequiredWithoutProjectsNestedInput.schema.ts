import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoadmapCreateWithoutProjectsInputObjectSchema as RoadmapCreateWithoutProjectsInputObjectSchema } from './RoadmapCreateWithoutProjectsInput.schema';
import { RoadmapUncheckedCreateWithoutProjectsInputObjectSchema as RoadmapUncheckedCreateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedCreateWithoutProjectsInput.schema';
import { RoadmapCreateOrConnectWithoutProjectsInputObjectSchema as RoadmapCreateOrConnectWithoutProjectsInputObjectSchema } from './RoadmapCreateOrConnectWithoutProjectsInput.schema';
import { RoadmapUpsertWithoutProjectsInputObjectSchema as RoadmapUpsertWithoutProjectsInputObjectSchema } from './RoadmapUpsertWithoutProjectsInput.schema';
import { RoadmapWhereUniqueInputObjectSchema as RoadmapWhereUniqueInputObjectSchema } from './RoadmapWhereUniqueInput.schema';
import { RoadmapUpdateToOneWithWhereWithoutProjectsInputObjectSchema as RoadmapUpdateToOneWithWhereWithoutProjectsInputObjectSchema } from './RoadmapUpdateToOneWithWhereWithoutProjectsInput.schema';
import { RoadmapUpdateWithoutProjectsInputObjectSchema as RoadmapUpdateWithoutProjectsInputObjectSchema } from './RoadmapUpdateWithoutProjectsInput.schema';
import { RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema as RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema } from './RoadmapUncheckedUpdateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoadmapCreateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoadmapCreateOrConnectWithoutProjectsInputObjectSchema).optional(),
  upsert: z.lazy(() => RoadmapUpsertWithoutProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => RoadmapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoadmapUpdateToOneWithWhereWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUpdateWithoutProjectsInputObjectSchema), z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputObjectSchema)]).optional()
}).strict();
export const RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutProjectsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutProjectsNestedInput>;
export const RoadmapUpdateOneRequiredWithoutProjectsNestedInputObjectZodSchema = makeSchema();
