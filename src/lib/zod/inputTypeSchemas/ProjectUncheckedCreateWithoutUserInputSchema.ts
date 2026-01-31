import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema";
import { RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema";
import { RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema";

export const ProjectUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
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
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export default ProjectUncheckedCreateWithoutUserInputSchema;
