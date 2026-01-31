import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyCreateNestedManyWithoutDependentInputSchema";
import { RepositoryCreateNestedManyWithoutProjectInputSchema } from "./RepositoryCreateNestedManyWithoutProjectInputSchema";
import { RoadmapProjectCreateNestedManyWithoutProjectInputSchema } from "./RoadmapProjectCreateNestedManyWithoutProjectInputSchema";
import { UserCreateNestedOneWithoutProjectsInputSchema } from "./UserCreateNestedOneWithoutProjectsInputSchema";

export const ProjectCreateWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutDependenciesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export default ProjectCreateWithoutDependenciesInputSchema;
