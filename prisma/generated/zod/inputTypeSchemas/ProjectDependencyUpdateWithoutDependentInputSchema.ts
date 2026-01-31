import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema";

export const ProjectDependencyUpdateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependentInput> =
  z.strictObject({
    dependency: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema)
      .optional(),
  });

export default ProjectDependencyUpdateWithoutDependentInputSchema;
