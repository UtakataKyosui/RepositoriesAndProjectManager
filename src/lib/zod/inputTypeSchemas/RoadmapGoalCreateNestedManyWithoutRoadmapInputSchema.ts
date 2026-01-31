import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateManyRoadmapInputEnvelopeSchema } from "./RoadmapGoalCreateManyRoadmapInputEnvelopeSchema";
import { RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema } from "./RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema";
import { RoadmapGoalCreateWithoutRoadmapInputSchema } from "./RoadmapGoalCreateWithoutRoadmapInputSchema";
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "./RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateNestedManyWithoutRoadmapInput> =
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
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema;
