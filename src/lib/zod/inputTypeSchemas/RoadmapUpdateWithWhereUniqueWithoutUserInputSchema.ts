import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapUncheckedUpdateWithoutUserInputSchema } from "./RoadmapUncheckedUpdateWithoutUserInputSchema";
import { RoadmapUpdateWithoutUserInputSchema } from "./RoadmapUpdateWithoutUserInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export default RoadmapUpdateWithWhereUniqueWithoutUserInputSchema;
