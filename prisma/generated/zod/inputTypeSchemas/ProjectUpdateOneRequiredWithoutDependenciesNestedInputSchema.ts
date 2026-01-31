import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutDependenciesInputSchema } from "./ProjectCreateOrConnectWithoutDependenciesInputSchema";
import { ProjectCreateWithoutDependenciesInputSchema } from "./ProjectCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedCreateWithoutDependenciesInputSchema } from "./ProjectUncheckedCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedUpdateWithoutDependenciesInputSchema } from "./ProjectUncheckedUpdateWithoutDependenciesInputSchema";
import { ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema } from "./ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema";
import { ProjectUpdateWithoutDependenciesInputSchema } from "./ProjectUpdateWithoutDependenciesInputSchema";
import { ProjectUpsertWithoutDependenciesInputSchema } from "./ProjectUpsertWithoutDependenciesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependenciesNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependenciesInputSchema)
      .optional(),
    upsert: z
      .lazy(() => ProjectUpsertWithoutDependenciesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
      ])
      .optional(),
  });

export default ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema;
