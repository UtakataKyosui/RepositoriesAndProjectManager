import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectUncheckedUpdateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedUpdateWithoutProjectInputSchema";
import { RoadmapProjectUpdateWithoutProjectInputSchema } from "./RoadmapProjectUpdateWithoutProjectInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputSchema),
    ]),
  });

export default RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema;
