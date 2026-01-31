import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutProjectsInputSchema } from "./RoadmapCreateWithoutProjectsInputSchema";
import { RoadmapUncheckedCreateWithoutProjectsInputSchema } from "./RoadmapUncheckedCreateWithoutProjectsInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
    ]),
  });

export default RoadmapCreateOrConnectWithoutProjectsInputSchema;
