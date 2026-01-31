import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutDependentsInputSchema } from "./ProjectCreateOrConnectWithoutDependentsInputSchema";
import { ProjectCreateWithoutDependentsInputSchema } from "./ProjectCreateWithoutDependentsInputSchema";
import { ProjectUncheckedCreateWithoutDependentsInputSchema } from "./ProjectUncheckedCreateWithoutDependentsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateNestedOneWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependentsInput> =
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
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export default ProjectCreateNestedOneWithoutDependentsInputSchema;
