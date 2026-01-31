import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateWithoutRoadmapInputSchema } from "./RoadmapGoalCreateWithoutRoadmapInputSchema";
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "./RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateOrConnectWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema;
