import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectScalarWhereInputSchema } from "./RoadmapProjectScalarWhereInputSchema";
import { RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema";
import { RoadmapProjectUpdateManyMutationInputSchema } from "./RoadmapProjectUpdateManyMutationInputSchema";

export const RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema),
    ]),
  });

export default RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema;
