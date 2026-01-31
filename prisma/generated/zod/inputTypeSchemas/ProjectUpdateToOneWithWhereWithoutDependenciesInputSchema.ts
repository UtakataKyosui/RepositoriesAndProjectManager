import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUncheckedUpdateWithoutDependenciesInputSchema } from "./ProjectUncheckedUpdateWithoutDependenciesInputSchema";
import { ProjectUpdateWithoutDependenciesInputSchema } from "./ProjectUpdateWithoutDependenciesInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependenciesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
    ]),
  });

export default ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema;
