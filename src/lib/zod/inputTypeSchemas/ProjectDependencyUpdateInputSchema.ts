import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema";
import { ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema } from "./ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema";

export const ProjectDependencyUpdateInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateInput> =
  z.strictObject({
    dependency: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema)
      .optional(),
    dependent: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema)
      .optional(),
  });

export default ProjectDependencyUpdateInputSchema;
