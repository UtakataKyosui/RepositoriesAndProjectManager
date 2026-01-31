import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutGoalsInputSchema } from "./RoadmapCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedCreateWithoutGoalsInputSchema } from "./RoadmapUncheckedCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedUpdateWithoutGoalsInputSchema } from "./RoadmapUncheckedUpdateWithoutGoalsInputSchema";
import { RoadmapUpdateWithoutGoalsInputSchema } from "./RoadmapUpdateWithoutGoalsInputSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapUpsertWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpsertWithoutGoalsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
    ]),
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export default RoadmapUpsertWithoutGoalsInputSchema;
