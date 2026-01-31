import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutDependenciesInputSchema } from "./ProjectCreateWithoutDependenciesInputSchema";
import { ProjectUncheckedCreateWithoutDependenciesInputSchema } from "./ProjectUncheckedCreateWithoutDependenciesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateOrConnectWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependenciesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
    ]),
  });

export default ProjectCreateOrConnectWithoutDependenciesInputSchema;
