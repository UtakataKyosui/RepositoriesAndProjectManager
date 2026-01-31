import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema } from "./ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema";
import { ProjectCreateWithoutRoadmapProjectsInputSchema } from "./ProjectCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRoadmapProjectsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export default ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema;
