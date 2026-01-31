import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema";

export const ProjectDependencyUpdateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependencyInput> =
  z.strictObject({
    dependent: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema)
      .optional(),
  });

export default ProjectDependencyUpdateWithoutDependencyInputSchema;
