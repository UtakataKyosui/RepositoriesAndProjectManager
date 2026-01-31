import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutDependenciesInputSchema } from "./ProjectCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedCreateWithoutDependenciesInputSchema } from "./ProjectUncheckedCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedUpdateWithoutDependenciesInputSchema } from "./ProjectUncheckedUpdateWithoutDependenciesInputSchema";
import { ProjectUpdateWithoutDependenciesInputSchema } from "./ProjectUpdateWithoutDependenciesInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpsertWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependenciesInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export default ProjectUpsertWithoutDependenciesInputSchema;
