import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ProjectDependencyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export default ProjectDependencyUncheckedUpdateManyInputSchema;
