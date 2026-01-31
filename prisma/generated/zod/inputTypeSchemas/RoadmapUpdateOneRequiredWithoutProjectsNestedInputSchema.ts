import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateOrConnectWithoutProjectsInputSchema } from "./RoadmapCreateOrConnectWithoutProjectsInputSchema";
import { RoadmapCreateWithoutProjectsInputSchema } from "./RoadmapCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedCreateWithoutProjectsInputSchema } from "./RoadmapUncheckedCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedUpdateWithoutProjectsInputSchema } from "./RoadmapUncheckedUpdateWithoutProjectsInputSchema";
import { RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema } from "./RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema";
import { RoadmapUpdateWithoutProjectsInputSchema } from "./RoadmapUpdateWithoutProjectsInputSchema";
import { RoadmapUpsertWithoutProjectsInputSchema } from "./RoadmapUpsertWithoutProjectsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutProjectsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    upsert: z.lazy(() => RoadmapUpsertWithoutProjectsInputSchema).optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
      ])
      .optional(),
  });

export default RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema;
