import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateWithoutDependentInputSchema } from "./ProjectDependencyCreateWithoutDependentInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependentInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyCreateOrConnectWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputSchema),
    ]),
  });

export default ProjectDependencyCreateOrConnectWithoutDependentInputSchema;
