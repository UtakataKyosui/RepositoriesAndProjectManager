import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyRoadmapInputEnvelopeSchema } from "./RoadmapProjectCreateManyRoadmapInputEnvelopeSchema";
import { RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema } from "./RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema";
import { RoadmapProjectCreateWithoutRoadmapInputSchema } from "./RoadmapProjectCreateWithoutRoadmapInputSchema";
import { RoadmapProjectScalarWhereInputSchema } from "./RoadmapProjectScalarWhereInputSchema";
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema } from "./RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema";
import { RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema } from "./RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema";
import { RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema } from "./RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
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
          () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
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

export default RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema;
