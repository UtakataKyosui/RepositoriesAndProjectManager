import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutDependentsInputSchema } from "./ProjectCreateWithoutDependentsInputSchema";
import { ProjectUncheckedCreateWithoutDependentsInputSchema } from "./ProjectUncheckedCreateWithoutDependentsInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateOrConnectWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependentsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
    ]),
  });

export default ProjectCreateOrConnectWithoutDependentsInputSchema;
