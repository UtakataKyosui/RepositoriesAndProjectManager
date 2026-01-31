import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapProjectUpdateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutRoadmapInput> =
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
    project: z
      .lazy(
        () => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema,
      )
      .optional(),
  });

export default RoadmapProjectUpdateWithoutRoadmapInputSchema;
