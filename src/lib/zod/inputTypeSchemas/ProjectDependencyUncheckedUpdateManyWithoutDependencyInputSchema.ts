import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyInput> =
  z.strictObject({
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema;
