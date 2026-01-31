import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalScalarWhereInputSchema } from "./RoadmapGoalScalarWhereInputSchema";
import { RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema";
import { RoadmapGoalUpdateManyMutationInputSchema } from "./RoadmapGoalUpdateManyMutationInputSchema";

export const RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyWithWhereWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapGoalUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema;
