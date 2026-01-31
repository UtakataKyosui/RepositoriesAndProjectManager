import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateOrConnectWithoutProjectsInputSchema } from "./RoadmapCreateOrConnectWithoutProjectsInputSchema";
import { RoadmapCreateWithoutProjectsInputSchema } from "./RoadmapCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedCreateWithoutProjectsInputSchema } from "./RoadmapUncheckedCreateWithoutProjectsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutProjectsInput> =
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
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
  });

export default RoadmapCreateNestedOneWithoutProjectsInputSchema;
