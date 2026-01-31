import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema } from "./RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema";
import { RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema } from "./RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RoadmapUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema,
      )
      .optional(),
  });

export default RoadmapUncheckedUpdateWithoutUserInputSchema;
