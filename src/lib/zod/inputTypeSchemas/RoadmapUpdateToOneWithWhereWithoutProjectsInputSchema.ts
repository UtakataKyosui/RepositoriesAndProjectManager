import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapUncheckedUpdateWithoutProjectsInputSchema } from "./RoadmapUncheckedUpdateWithoutProjectsInputSchema";
import { RoadmapUpdateWithoutProjectsInputSchema } from "./RoadmapUpdateWithoutProjectsInputSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
    ]),
  });

export default RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema;
