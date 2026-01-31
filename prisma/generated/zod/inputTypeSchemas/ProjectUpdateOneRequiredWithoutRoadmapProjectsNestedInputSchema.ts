import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema } from "./ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema";
import { ProjectCreateWithoutRoadmapProjectsInputSchema } from "./ProjectCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema";
import { ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema } from "./ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema";
import { ProjectUpdateWithoutRoadmapProjectsInputSchema } from "./ProjectUpdateWithoutRoadmapProjectsInputSchema";
import { ProjectUpsertWithoutRoadmapProjectsInputSchema } from "./ProjectUpsertWithoutRoadmapProjectsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput> =
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
    upsert: z
      .lazy(() => ProjectUpsertWithoutRoadmapProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(
          () => ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema,
        ),
        z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
      ])
      .optional(),
  });

export default ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema;
