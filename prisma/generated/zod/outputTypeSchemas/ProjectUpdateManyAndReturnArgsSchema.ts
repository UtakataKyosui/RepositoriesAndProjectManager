import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/ProjectUncheckedUpdateManyInputSchema";
import { ProjectUpdateManyMutationInputSchema } from "../inputTypeSchemas/ProjectUpdateManyMutationInputSchema";
import { ProjectWhereInputSchema } from "../inputTypeSchemas/ProjectWhereInputSchema";

export const ProjectUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectUpdateManyMutationInputSchema,
        ProjectUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ProjectUpdateManyAndReturnArgsSchema;
