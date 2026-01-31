import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> =
  z
    .object({
      repositories: z.boolean().optional(),
      dependencies: z.boolean().optional(),
      dependents: z.boolean().optional(),
      roadmapProjects: z.boolean().optional(),
    })
    .strict();

export default ProjectCountOutputTypeSelectSchema;
