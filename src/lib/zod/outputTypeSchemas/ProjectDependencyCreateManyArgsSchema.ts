import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyCreateManyInputSchema } from "../inputTypeSchemas/ProjectDependencyCreateManyInputSchema";

export const ProjectDependencyCreateManyArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyCreateManyInputSchema,
        ProjectDependencyCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ProjectDependencyCreateManyArgsSchema;
