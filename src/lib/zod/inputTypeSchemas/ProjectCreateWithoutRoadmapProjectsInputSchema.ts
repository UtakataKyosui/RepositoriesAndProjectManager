import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyCreateNestedManyWithoutDependencyInputSchema";
import { ProjectDependencyCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyCreateNestedManyWithoutDependentInputSchema";
import { RepositoryCreateNestedManyWithoutProjectInputSchema } from "./RepositoryCreateNestedManyWithoutProjectInputSchema";
import { UserCreateNestedOneWithoutProjectsInputSchema } from "./UserCreateNestedOneWithoutProjectsInputSchema";

export const ProjectCreateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRoadmapProjectsInput> =
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
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
  });

export default ProjectCreateWithoutRoadmapProjectsInputSchema;
