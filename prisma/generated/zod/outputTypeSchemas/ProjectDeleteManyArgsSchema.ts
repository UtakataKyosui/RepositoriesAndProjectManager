import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectWhereInputSchema } from "../inputTypeSchemas/ProjectWhereInputSchema";

export const ProjectDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDeleteManyArgs> =
  z
    .object({
      where: ProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ProjectDeleteManyArgsSchema;
