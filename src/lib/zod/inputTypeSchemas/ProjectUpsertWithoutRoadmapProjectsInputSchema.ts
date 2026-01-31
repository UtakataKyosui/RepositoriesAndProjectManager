import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutRoadmapProjectsInputSchema } from "./ProjectCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpsertWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRoadmapProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export default ProjectUpsertWithoutRoadmapProjectsInputSchema;
