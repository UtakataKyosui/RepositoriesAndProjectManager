import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema";
import { RoadmapGoalUpdateWithoutRoadmapInputSchema } from "./RoadmapGoalUpdateWithoutRoadmapInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "./RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema;
