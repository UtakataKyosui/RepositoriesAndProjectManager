import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateWithoutProjectInputSchema } from "./RoadmapProjectCreateWithoutProjectInputSchema";
import { RoadmapProjectUncheckedCreateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateWithoutProjectInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export default RoadmapProjectCreateOrConnectWithoutProjectInputSchema;
