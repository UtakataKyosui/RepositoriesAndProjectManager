import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema";
import { RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema";
import { RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema";

export const ProjectUncheckedCreateWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutDependentsInput> =
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
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export default ProjectUncheckedCreateWithoutDependentsInputSchema;
