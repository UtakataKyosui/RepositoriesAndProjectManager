import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutDependentsInputSchema } from "./ProjectCreateOrConnectWithoutDependentsInputSchema";
import { ProjectCreateWithoutDependentsInputSchema } from "./ProjectCreateWithoutDependentsInputSchema";
import { ProjectUncheckedCreateWithoutDependentsInputSchema } from "./ProjectUncheckedCreateWithoutDependentsInputSchema";
import { ProjectUncheckedUpdateWithoutDependentsInputSchema } from "./ProjectUncheckedUpdateWithoutDependentsInputSchema";
import { ProjectUpdateToOneWithWhereWithoutDependentsInputSchema } from "./ProjectUpdateToOneWithWhereWithoutDependentsInputSchema";
import { ProjectUpdateWithoutDependentsInputSchema } from "./ProjectUpdateWithoutDependentsInputSchema";
import { ProjectUpsertWithoutDependentsInputSchema } from "./ProjectUpsertWithoutDependentsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependentsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependentsInputSchema)
      .optional(),
    upsert: z.lazy(() => ProjectUpsertWithoutDependentsInputSchema).optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependentsInputSchema),
        z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
      ])
      .optional(),
  });

export default ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema;
