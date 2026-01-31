import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutRoadmapProjectsInputSchema } from "./ProjectCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRoadmapProjectsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
    ]),
  });

export default ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema;
