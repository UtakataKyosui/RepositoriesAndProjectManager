import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export default ProjectDependencyUncheckedCreateInputSchema;
