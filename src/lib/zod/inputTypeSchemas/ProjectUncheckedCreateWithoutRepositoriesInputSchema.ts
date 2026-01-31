import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema";
import { RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema";

export const ProjectUncheckedCreateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRepositoriesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
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

export default ProjectUncheckedCreateWithoutRepositoriesInputSchema;
