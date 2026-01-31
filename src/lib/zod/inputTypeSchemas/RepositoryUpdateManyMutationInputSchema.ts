import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RepositoryUpdateManyMutationInputSchema: z.ZodType<Prisma.RepositoryUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export default RepositoryUpdateManyMutationInputSchema;
