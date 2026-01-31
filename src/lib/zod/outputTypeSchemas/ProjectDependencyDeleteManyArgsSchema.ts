import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyWhereInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereInputSchema";

export const ProjectDependencyDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDependencyDeleteManyArgs> =
  z
    .object({
      where: ProjectDependencyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ProjectDependencyDeleteManyArgsSchema;
