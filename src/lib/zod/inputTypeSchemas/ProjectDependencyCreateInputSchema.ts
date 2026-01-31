import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutDependenciesInputSchema } from "./ProjectCreateNestedOneWithoutDependenciesInputSchema";
import { ProjectCreateNestedOneWithoutDependentsInputSchema } from "./ProjectCreateNestedOneWithoutDependentsInputSchema";

export const ProjectDependencyCreateInputSchema: z.ZodType<Prisma.ProjectDependencyCreateInput> =
  z.strictObject({
    dependency: z.lazy(
      () => ProjectCreateNestedOneWithoutDependenciesInputSchema,
    ),
    dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputSchema),
  });

export default ProjectDependencyCreateInputSchema;
