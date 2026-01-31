import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateWithoutDependencyInputSchema } from "./ProjectDependencyCreateWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependencyInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyCreateOrConnectWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
      ),
    ]),
  });

export default ProjectDependencyCreateOrConnectWithoutDependencyInputSchema;
