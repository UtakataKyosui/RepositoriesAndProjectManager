import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema";
import { RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema";

export const ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRoadmapProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
  });

export default ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema;
