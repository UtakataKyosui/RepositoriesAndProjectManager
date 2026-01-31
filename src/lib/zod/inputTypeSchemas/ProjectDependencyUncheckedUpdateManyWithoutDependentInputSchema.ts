import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema;
