import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateWithoutDependentInputSchema } from "./ProjectDependencyCreateWithoutDependentInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependentInputSchema";
import { ProjectDependencyUncheckedUpdateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedUpdateWithoutDependentInputSchema";
import { ProjectDependencyUpdateWithoutDependentInputSchema } from "./ProjectDependencyUpdateWithoutDependentInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputSchema),
    ]),
  });

export default ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema;
