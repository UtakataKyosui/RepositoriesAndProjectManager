import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUpdateManyWithoutUserNestedInputSchema } from "./AccountUpdateManyWithoutUserNestedInputSchema";
import { BoolFieldUpdateOperationsInputSchema } from "./BoolFieldUpdateOperationsInputSchema";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { RoadmapUpdateManyWithoutUserNestedInputSchema } from "./RoadmapUpdateManyWithoutUserNestedInputSchema";
import { SessionUpdateManyWithoutUserNestedInputSchema } from "./SessionUpdateManyWithoutUserNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const UserUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpdateWithoutProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
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
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export default UserUpdateWithoutProjectsInputSchema;
