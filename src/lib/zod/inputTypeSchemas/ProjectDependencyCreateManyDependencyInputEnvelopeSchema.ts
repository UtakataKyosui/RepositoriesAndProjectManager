import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependencyInputSchema } from "./ProjectDependencyCreateManyDependencyInputSchema";

export const ProjectDependencyCreateManyDependencyInputEnvelopeSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectDependencyCreateManyDependencyInputSchema),
      z.lazy(() => ProjectDependencyCreateManyDependencyInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default ProjectDependencyCreateManyDependencyInputEnvelopeSchema;
