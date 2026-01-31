import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapUncheckedUpdateWithoutGoalsInputSchema } from "./RoadmapUncheckedUpdateWithoutGoalsInputSchema";
import { RoadmapUpdateWithoutGoalsInputSchema } from "./RoadmapUpdateWithoutGoalsInputSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutGoalsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
    ]),
  });

export default RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema;
