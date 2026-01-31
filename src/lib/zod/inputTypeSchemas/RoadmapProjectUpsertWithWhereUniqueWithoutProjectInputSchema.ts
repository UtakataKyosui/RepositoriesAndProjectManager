import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateWithoutProjectInputSchema } from "./RoadmapProjectCreateWithoutProjectInputSchema";
import { RoadmapProjectUncheckedCreateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateWithoutProjectInputSchema";
import { RoadmapProjectUncheckedUpdateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedUpdateWithoutProjectInputSchema";
import { RoadmapProjectUpdateWithoutProjectInputSchema } from "./RoadmapProjectUpdateWithoutProjectInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export default RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema;
