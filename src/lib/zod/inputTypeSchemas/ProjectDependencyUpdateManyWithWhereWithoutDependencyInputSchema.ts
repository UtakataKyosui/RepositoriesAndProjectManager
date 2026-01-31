import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyScalarWhereInputSchema } from "./ProjectDependencyScalarWhereInputSchema";
import { ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema";
import { ProjectDependencyUpdateManyMutationInputSchema } from "./ProjectDependencyUpdateManyMutationInputSchema";

export const ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateManyMutationInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema,
      ),
    ]),
  });

export default ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema;
