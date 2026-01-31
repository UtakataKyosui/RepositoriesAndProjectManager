import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyCreateManyDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInput> =
  z.strictObject({
    dependencyId: z.string(),
  });

export default ProjectDependencyCreateManyDependentInputSchema;
