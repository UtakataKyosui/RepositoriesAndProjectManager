import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyCreateManyDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInput> =
  z.strictObject({
    dependentId: z.string(),
  });

export default ProjectDependencyCreateManyDependencyInputSchema;
