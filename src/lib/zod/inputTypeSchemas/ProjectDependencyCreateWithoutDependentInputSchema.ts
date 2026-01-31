import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutDependenciesInputSchema } from "./ProjectCreateNestedOneWithoutDependenciesInputSchema";

export const ProjectDependencyCreateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependentInput> =
  z.strictObject({
    dependency: z.lazy(
      () => ProjectCreateNestedOneWithoutDependenciesInputSchema,
    ),
  });

export default ProjectDependencyCreateWithoutDependentInputSchema;
