import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateWithoutDependencyInputSchema } from "./ProjectDependencyCreateWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema";
import { ProjectDependencyUpdateWithoutDependencyInputSchema } from "./ProjectDependencyUpdateWithoutDependencyInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
      ),
    ]),
  });

export default ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema;
