import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependentInputSchema } from "./ProjectDependencyCreateManyDependentInputSchema";

export const ProjectDependencyCreateManyDependentInputEnvelopeSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectDependencyCreateManyDependentInputSchema),
      z.lazy(() => ProjectDependencyCreateManyDependentInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default ProjectDependencyCreateManyDependentInputEnvelopeSchema;
