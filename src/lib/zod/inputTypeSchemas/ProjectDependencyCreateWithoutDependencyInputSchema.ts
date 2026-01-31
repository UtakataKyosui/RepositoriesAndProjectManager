import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutDependentsInputSchema } from "./ProjectCreateNestedOneWithoutDependentsInputSchema";

export const ProjectDependencyCreateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependencyInput> =
  z.strictObject({
    dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputSchema),
  });

export default ProjectDependencyCreateWithoutDependencyInputSchema;
