import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectIncludeSchema } from "../inputTypeSchemas/ProjectIncludeSchema";
import { ProjectSelectSchema } from "../inputTypeSchemas/ProjectSelectSchema";

export const ProjectArgsSchema: z.ZodType<Prisma.ProjectDefaultArgs> = z
  .object({
    select: z.lazy(() => ProjectSelectSchema).optional(),
    include: z.lazy(() => ProjectIncludeSchema).optional(),
  })
  .strict();

export default ProjectArgsSchema;
