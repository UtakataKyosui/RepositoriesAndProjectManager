import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateManyRoadmapInputEnvelopeSchema } from "./RoadmapGoalCreateManyRoadmapInputEnvelopeSchema";
import { RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema } from "./RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema";
import { RoadmapGoalCreateWithoutRoadmapInputSchema } from "./RoadmapGoalCreateWithoutRoadmapInputSchema";
import { RoadmapGoalScalarWhereInputSchema } from "./RoadmapGoalScalarWhereInputSchema";
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema } from "./RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema";
import { RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema } from "./RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema";
import { RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema } from "./RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "./RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema;
