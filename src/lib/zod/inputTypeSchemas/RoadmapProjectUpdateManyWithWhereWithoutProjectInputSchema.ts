import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectScalarWhereInputSchema } from "./RoadmapProjectScalarWhereInputSchema";
import { RoadmapProjectUncheckedUpdateManyWithoutProjectInputSchema } from "./RoadmapProjectUncheckedUpdateManyWithoutProjectInputSchema";
import { RoadmapProjectUpdateManyMutationInputSchema } from "./RoadmapProjectUpdateManyMutationInputSchema";

export const RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutProjectInputSchema),
    ]),
  });

export default RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema;
