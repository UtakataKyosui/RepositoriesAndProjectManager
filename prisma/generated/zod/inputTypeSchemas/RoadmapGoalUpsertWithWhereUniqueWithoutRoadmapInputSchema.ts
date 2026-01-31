import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateWithoutRoadmapInputSchema } from "./RoadmapGoalCreateWithoutRoadmapInputSchema";
import { RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema";
import { RoadmapGoalUpdateWithoutRoadmapInputSchema } from "./RoadmapGoalUpdateWithoutRoadmapInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "./RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema;
