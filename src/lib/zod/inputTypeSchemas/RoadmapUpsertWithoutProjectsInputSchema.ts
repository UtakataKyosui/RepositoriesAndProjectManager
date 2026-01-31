import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutProjectsInputSchema } from "./RoadmapCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedCreateWithoutProjectsInputSchema } from "./RoadmapUncheckedCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedUpdateWithoutProjectsInputSchema } from "./RoadmapUncheckedUpdateWithoutProjectsInputSchema";
import { RoadmapUpdateWithoutProjectsInputSchema } from "./RoadmapUpdateWithoutProjectsInputSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpsertWithoutProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
    ]),
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export default RoadmapUpsertWithoutProjectsInputSchema;
