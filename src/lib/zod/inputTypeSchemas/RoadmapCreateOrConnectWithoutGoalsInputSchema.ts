import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutGoalsInputSchema } from "./RoadmapCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedCreateWithoutGoalsInputSchema } from "./RoadmapUncheckedCreateWithoutGoalsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateOrConnectWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutGoalsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
    ]),
  });

export default RoadmapCreateOrConnectWithoutGoalsInputSchema;
