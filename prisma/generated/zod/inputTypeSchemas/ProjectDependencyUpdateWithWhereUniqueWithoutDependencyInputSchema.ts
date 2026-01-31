import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema";
import { ProjectDependencyUpdateWithoutDependencyInputSchema } from "./ProjectDependencyUpdateWithoutDependencyInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema,
      ),
    ]),
  });

export default ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema;
