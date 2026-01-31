import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFieldUpdateOperationsInputSchema } from "./BoolFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateManyWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema;
