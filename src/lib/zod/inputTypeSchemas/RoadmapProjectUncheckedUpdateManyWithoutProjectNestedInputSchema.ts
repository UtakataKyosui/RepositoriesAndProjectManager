import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyProjectInputEnvelopeSchema } from "./RoadmapProjectCreateManyProjectInputEnvelopeSchema";
import { RoadmapProjectCreateOrConnectWithoutProjectInputSchema } from "./RoadmapProjectCreateOrConnectWithoutProjectInputSchema";
import { RoadmapProjectCreateWithoutProjectInputSchema } from "./RoadmapProjectCreateWithoutProjectInputSchema";
import { RoadmapProjectScalarWhereInputSchema } from "./RoadmapProjectScalarWhereInputSchema";
import { RoadmapProjectUncheckedCreateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateWithoutProjectInputSchema";
import { RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema } from "./RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema";
import { RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema } from "./RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema";
import { RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema } from "./RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema;
