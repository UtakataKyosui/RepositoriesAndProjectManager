import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateManyUserInputSchema } from "./ProjectCreateManyUserInputSchema";

export const ProjectCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectCreateManyUserInputSchema),
      z.lazy(() => ProjectCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default ProjectCreateManyUserInputEnvelopeSchema;
