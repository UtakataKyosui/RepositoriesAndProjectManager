import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUncheckedUpdateWithoutDependentsInputSchema } from "./ProjectUncheckedUpdateWithoutDependentsInputSchema";
import { ProjectUpdateWithoutDependentsInputSchema } from "./ProjectUpdateWithoutDependentsInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpdateToOneWithWhereWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependentsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
    ]),
  });

export default ProjectUpdateToOneWithWhereWithoutDependentsInputSchema;
