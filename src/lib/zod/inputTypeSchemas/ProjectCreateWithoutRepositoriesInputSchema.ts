import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateNestedManyWithoutDependencyInputSchema } from "./ProjectDependencyCreateNestedManyWithoutDependencyInputSchema";
import { ProjectDependencyCreateNestedManyWithoutDependentInputSchema } from "./ProjectDependencyCreateNestedManyWithoutDependentInputSchema";
import { RoadmapProjectCreateNestedManyWithoutProjectInputSchema } from "./RoadmapProjectCreateNestedManyWithoutProjectInputSchema";
import { UserCreateNestedOneWithoutProjectsInputSchema } from "./UserCreateNestedOneWithoutProjectsInputSchema";

export const ProjectCreateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRepositoriesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export default ProjectCreateWithoutRepositoriesInputSchema;
