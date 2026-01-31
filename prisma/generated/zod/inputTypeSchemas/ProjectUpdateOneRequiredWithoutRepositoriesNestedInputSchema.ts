import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutRepositoriesInputSchema } from "./ProjectCreateOrConnectWithoutRepositoriesInputSchema";
import { ProjectCreateWithoutRepositoriesInputSchema } from "./ProjectCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedCreateWithoutRepositoriesInputSchema } from "./ProjectUncheckedCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedUpdateWithoutRepositoriesInputSchema } from "./ProjectUncheckedUpdateWithoutRepositoriesInputSchema";
import { ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema } from "./ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema";
import { ProjectUpdateWithoutRepositoriesInputSchema } from "./ProjectUpdateWithoutRepositoriesInputSchema";
import { ProjectUpsertWithoutRepositoriesInputSchema } from "./ProjectUpsertWithoutRepositoriesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRepositoriesNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputSchema)
      .optional(),
    upsert: z
      .lazy(() => ProjectUpsertWithoutRepositoriesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
      ])
      .optional(),
  });

export default ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema;
