import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectDependencyDependencyIdDependentIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectDependencyDependencyIdDependentIdCompoundUniqueInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export default ProjectDependencyDependencyIdDependentIdCompoundUniqueInputSchema;
