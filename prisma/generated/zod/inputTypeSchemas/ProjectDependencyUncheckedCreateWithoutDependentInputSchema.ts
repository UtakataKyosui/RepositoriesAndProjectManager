import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyUncheckedCreateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependentInput> =
  z.strictObject({
    dependencyId: z.string(),
  });

export default ProjectDependencyUncheckedCreateWithoutDependentInputSchema;
