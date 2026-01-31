import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema } from "./RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapProjectUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmap: z
      .lazy(() => RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
  });

export default RoadmapProjectUpdateWithoutProjectInputSchema;
