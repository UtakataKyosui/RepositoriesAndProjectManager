import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectCreateManyInputSchema } from "../inputTypeSchemas/ProjectCreateManyInputSchema";

export const ProjectCreateManyArgsSchema: z.ZodType<Prisma.ProjectCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectCreateManyInputSchema,
        ProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ProjectCreateManyArgsSchema;
