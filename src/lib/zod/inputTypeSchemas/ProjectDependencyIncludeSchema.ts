import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";

export const ProjectDependencyIncludeSchema: z.ZodType<Prisma.ProjectDependencyInclude> =
  z
    .object({
      dependency: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
      dependent: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export default ProjectDependencyIncludeSchema;
