import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateWithoutRoadmapInputSchema } from "./RoadmapProjectCreateWithoutRoadmapInputSchema";
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema";
import { RoadmapProjectUpdateWithoutRoadmapInputSchema } from "./RoadmapProjectUpdateWithoutRoadmapInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema;
