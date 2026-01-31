import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateWithoutUserInputSchema } from "./RoadmapCreateWithoutUserInputSchema";
import { RoadmapUncheckedCreateWithoutUserInputSchema } from "./RoadmapUncheckedCreateWithoutUserInputSchema";
import { RoadmapUncheckedUpdateWithoutUserInputSchema } from "./RoadmapUncheckedUpdateWithoutUserInputSchema";
import { RoadmapUpdateWithoutUserInputSchema } from "./RoadmapUpdateWithoutUserInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default RoadmapUpsertWithWhereUniqueWithoutUserInputSchema;
