import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutRepositoriesInputSchema } from "./ProjectCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedCreateWithoutRepositoriesInputSchema } from "./ProjectUncheckedCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedUpdateWithoutRepositoriesInputSchema } from "./ProjectUncheckedUpdateWithoutRepositoriesInputSchema";
import { ProjectUpdateWithoutRepositoriesInputSchema } from "./ProjectUpdateWithoutRepositoriesInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpsertWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRepositoriesInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export default ProjectUpsertWithoutRepositoriesInputSchema;
