import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const RepositoryUpdateInputSchema: z.ZodType<Prisma.RepositoryUpdateInput> =
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
    project: z
      .lazy(() => ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema)
      .optional(),
  });

export default RepositoryUpdateInputSchema;
