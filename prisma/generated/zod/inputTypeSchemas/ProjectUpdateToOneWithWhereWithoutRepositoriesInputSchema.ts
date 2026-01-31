import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUncheckedUpdateWithoutRepositoriesInputSchema } from "./ProjectUncheckedUpdateWithoutRepositoriesInputSchema";
import { ProjectUpdateWithoutRepositoriesInputSchema } from "./ProjectUpdateWithoutRepositoriesInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRepositoriesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
    ]),
  });

export default ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema;
