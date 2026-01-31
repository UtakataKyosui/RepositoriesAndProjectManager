import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
    ]),
  });

export default ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema;
