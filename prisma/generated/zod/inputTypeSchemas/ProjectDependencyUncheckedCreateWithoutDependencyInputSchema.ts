import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyUncheckedCreateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependencyInput> =
  z.strictObject({
    dependentId: z.string(),
  });

export default ProjectDependencyUncheckedCreateWithoutDependencyInputSchema;
