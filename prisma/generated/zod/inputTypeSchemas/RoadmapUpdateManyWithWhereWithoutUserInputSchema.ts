import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapScalarWhereInputSchema } from "./RoadmapScalarWhereInputSchema";
import { RoadmapUncheckedUpdateManyWithoutUserInputSchema } from "./RoadmapUncheckedUpdateManyWithoutUserInputSchema";
import { RoadmapUpdateManyMutationInputSchema } from "./RoadmapUpdateManyMutationInputSchema";

export const RoadmapUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpdateManyWithWhereWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateManyWithoutUserInputSchema),
    ]),
  });

export default RoadmapUpdateManyWithWhereWithoutUserInputSchema;
