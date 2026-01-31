import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyIncludeSchema } from "../inputTypeSchemas/ProjectDependencyIncludeSchema";
import { ProjectDependencySelectSchema } from "../inputTypeSchemas/ProjectDependencySelectSchema";

export const ProjectDependencyArgsSchema: z.ZodType<Prisma.ProjectDependencyDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ProjectDependencySelectSchema).optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
    })
    .strict();

export default ProjectDependencyArgsSchema;
