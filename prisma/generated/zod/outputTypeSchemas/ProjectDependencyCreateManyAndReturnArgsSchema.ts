import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyCreateManyInputSchema } from "../inputTypeSchemas/ProjectDependencyCreateManyInputSchema";

export const ProjectDependencyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyCreateManyInputSchema,
        ProjectDependencyCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ProjectDependencyCreateManyAndReturnArgsSchema;
