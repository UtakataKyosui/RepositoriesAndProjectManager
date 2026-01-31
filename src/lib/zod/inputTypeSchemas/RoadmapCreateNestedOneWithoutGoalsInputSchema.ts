import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateOrConnectWithoutGoalsInputSchema } from "./RoadmapCreateOrConnectWithoutGoalsInputSchema";
import { RoadmapCreateWithoutGoalsInputSchema } from "./RoadmapCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedCreateWithoutGoalsInputSchema } from "./RoadmapUncheckedCreateWithoutGoalsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateNestedOneWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutGoalsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutGoalsInputSchema)
      .optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
  });

export default RoadmapCreateNestedOneWithoutGoalsInputSchema;
