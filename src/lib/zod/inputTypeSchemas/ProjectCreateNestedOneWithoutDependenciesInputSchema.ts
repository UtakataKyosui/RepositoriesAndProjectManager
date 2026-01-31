import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutDependenciesInputSchema } from "./ProjectCreateOrConnectWithoutDependenciesInputSchema";
import { ProjectCreateWithoutDependenciesInputSchema } from "./ProjectCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedCreateWithoutDependenciesInputSchema } from "./ProjectUncheckedCreateWithoutDependenciesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateNestedOneWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependenciesInput> =
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
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export default ProjectCreateNestedOneWithoutDependenciesInputSchema;
