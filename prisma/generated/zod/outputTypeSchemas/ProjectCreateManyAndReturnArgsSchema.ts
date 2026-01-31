import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectCreateManyInputSchema } from "../inputTypeSchemas/ProjectCreateManyInputSchema";

export const ProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectCreateManyInputSchema,
        ProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ProjectCreateManyAndReturnArgsSchema;
