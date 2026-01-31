import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/ProjectDependencyUncheckedUpdateManyInputSchema";
import { ProjectDependencyUpdateManyMutationInputSchema } from "../inputTypeSchemas/ProjectDependencyUpdateManyMutationInputSchema";
import { ProjectDependencyWhereInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereInputSchema";

export const ProjectDependencyUpdateManyArgsSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyUpdateManyMutationInputSchema,
        ProjectDependencyUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectDependencyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ProjectDependencyUpdateManyArgsSchema;
