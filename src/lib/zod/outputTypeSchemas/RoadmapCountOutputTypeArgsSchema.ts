import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapCountOutputTypeSelectSchema } from "./RoadmapCountOutputTypeSelectSchema";

export const RoadmapCountOutputTypeArgsSchema: z.ZodType<Prisma.RoadmapCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => RoadmapCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default RoadmapCountOutputTypeSelectSchema;
