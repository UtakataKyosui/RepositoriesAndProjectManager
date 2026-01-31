import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFieldUpdateOperationsInputSchema } from "./BoolFieldUpdateOperationsInputSchema";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema } from "./ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema";
import { ProjectDependencyUpdateManyWithoutDependentNestedInputSchema } from "./ProjectDependencyUpdateManyWithoutDependentNestedInputSchema";
import { RoadmapProjectUpdateManyWithoutProjectNestedInputSchema } from "./RoadmapProjectUpdateManyWithoutProjectNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { UserUpdateOneRequiredWithoutProjectsNestedInputSchema } from "./UserUpdateOneRequiredWithoutProjectsNestedInputSchema";

export const ProjectUpdateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutRepositoriesInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export default ProjectUpdateWithoutRepositoriesInputSchema;
