import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutUserInputSchema } from "./RoadmapCreateWithoutUserInputSchema";
import { RoadmapUncheckedCreateWithoutUserInputSchema } from "./RoadmapUncheckedCreateWithoutUserInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default RoadmapCreateOrConnectWithoutUserInputSchema;
