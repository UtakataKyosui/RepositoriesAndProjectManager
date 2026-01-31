import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutDependentsInputSchema } from "./ProjectCreateWithoutDependentsInputSchema";
import { ProjectUncheckedCreateWithoutDependentsInputSchema } from "./ProjectUncheckedCreateWithoutDependentsInputSchema";
import { ProjectUncheckedUpdateWithoutDependentsInputSchema } from "./ProjectUncheckedUpdateWithoutDependentsInputSchema";
import { ProjectUpdateWithoutDependentsInputSchema } from "./ProjectUpdateWithoutDependentsInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpsertWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependentsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export default ProjectUpsertWithoutDependentsInputSchema;
