import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ProjectDependencyUncheckedUpdateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependentInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default ProjectDependencyUncheckedUpdateWithoutDependentInputSchema;
