import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateManyUserInputEnvelopeSchema } from "./RoadmapCreateManyUserInputEnvelopeSchema";
import { RoadmapCreateOrConnectWithoutUserInputSchema } from "./RoadmapCreateOrConnectWithoutUserInputSchema";
import { RoadmapCreateWithoutUserInputSchema } from "./RoadmapCreateWithoutUserInputSchema";
import { RoadmapScalarWhereInputSchema } from "./RoadmapScalarWhereInputSchema";
import { RoadmapUncheckedCreateWithoutUserInputSchema } from "./RoadmapUncheckedCreateWithoutUserInputSchema";
import { RoadmapUpdateManyWithWhereWithoutUserInputSchema } from "./RoadmapUpdateManyWithWhereWithoutUserInputSchema";
import { RoadmapUpdateWithWhereUniqueWithoutUserInputSchema } from "./RoadmapUpdateWithWhereUniqueWithoutUserInputSchema";
import { RoadmapUpsertWithWhereUniqueWithoutUserInputSchema } from "./RoadmapUpsertWithWhereUniqueWithoutUserInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateManyWithoutUserNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutUserInputSchema),
        z.lazy(() => RoadmapCreateWithoutUserInputSchema).array(),
        z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => RoadmapCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapUpdateManyWithoutUserNestedInputSchema;
