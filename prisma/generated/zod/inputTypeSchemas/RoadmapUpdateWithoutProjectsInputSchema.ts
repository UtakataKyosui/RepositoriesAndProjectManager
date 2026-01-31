import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema } from "./RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema } from "./UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema";

export const RoadmapUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpdateWithoutProjectsInput> =
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema)
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export default RoadmapUpdateWithoutProjectsInputSchema;
