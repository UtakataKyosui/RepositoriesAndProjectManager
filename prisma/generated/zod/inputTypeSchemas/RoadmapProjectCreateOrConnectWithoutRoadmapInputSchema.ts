import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateWithoutRoadmapInputSchema } from "./RoadmapProjectCreateWithoutRoadmapInputSchema";
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema;
