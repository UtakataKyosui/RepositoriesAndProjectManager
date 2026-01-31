import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateOrConnectWithoutGoalsInputSchema } from "./RoadmapCreateOrConnectWithoutGoalsInputSchema";
import { RoadmapCreateWithoutGoalsInputSchema } from "./RoadmapCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedCreateWithoutGoalsInputSchema } from "./RoadmapUncheckedCreateWithoutGoalsInputSchema";
import { RoadmapUncheckedUpdateWithoutGoalsInputSchema } from "./RoadmapUncheckedUpdateWithoutGoalsInputSchema";
import { RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema } from "./RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema";
import { RoadmapUpdateWithoutGoalsInputSchema } from "./RoadmapUpdateWithoutGoalsInputSchema";
import { RoadmapUpsertWithoutGoalsInputSchema } from "./RoadmapUpsertWithoutGoalsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapUpdateOneRequiredWithoutGoalsNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutGoalsNestedInput> =
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
    upsert: z.lazy(() => RoadmapUpsertWithoutGoalsInputSchema).optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
      ])
      .optional(),
  });

export default RoadmapUpdateOneRequiredWithoutGoalsNestedInputSchema;
