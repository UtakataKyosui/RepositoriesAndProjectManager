import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema";
import { RoadmapProjectUpdateWithoutRoadmapInputSchema } from "./RoadmapProjectUpdateWithoutRoadmapInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema;
