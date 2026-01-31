import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedUpdateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedUpdateWithoutDependentInputSchema";
import { ProjectDependencyUpdateWithoutDependentInputSchema } from "./ProjectDependencyUpdateWithoutDependentInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputSchema),
    ]),
  });

export default ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema;
