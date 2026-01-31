import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyScalarWhereInputSchema } from "./ProjectDependencyScalarWhereInputSchema";
import { ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema } from "./ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema";
import { ProjectDependencyUpdateManyMutationInputSchema } from "./ProjectDependencyUpdateManyMutationInputSchema";

export const ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateManyMutationInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema,
      ),
    ]),
  });

export default ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema;
