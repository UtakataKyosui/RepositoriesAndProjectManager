import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";

export const ProjectDependencySelectSchema: z.ZodType<Prisma.ProjectDependencySelect> =
  z
    .object({
      dependencyId: z.boolean().optional(),
      dependentId: z.boolean().optional(),
      dependency: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
      dependent: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export default ProjectDependencySelectSchema;
