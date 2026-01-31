import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema } from "./RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema } from "./UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema";

export const RoadmapUpdateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpdateWithoutGoalsInput> =
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
    projects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export default RoadmapUpdateWithoutGoalsInputSchema;
