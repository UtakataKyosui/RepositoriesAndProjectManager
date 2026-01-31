import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyCreateManyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export default ProjectDependencyCreateManyInputSchema;
