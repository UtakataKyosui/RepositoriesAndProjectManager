import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutRoadmapInput> =
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
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema;
