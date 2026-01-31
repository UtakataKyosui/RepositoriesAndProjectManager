import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema";
import { RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema } from "./RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapProjectUpdateInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateInput> =
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
    project: z
      .lazy(
        () => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema,
      )
      .optional(),
  });

export default RoadmapProjectUpdateInputSchema;
