import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFieldUpdateOperationsInputSchema } from "./BoolFieldUpdateOperationsInputSchema";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema } from "./ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema";
import { ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema } from "./ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema";
import { RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema } from "./RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ProjectUncheckedUpdateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRepositoriesInput> =
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
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export default ProjectUncheckedUpdateWithoutRepositoriesInputSchema;
