import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCreateManyProjectInputSchema } from "./RepositoryCreateManyProjectInputSchema";

export const RepositoryCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RepositoryCreateManyProjectInputSchema),
      z.lazy(() => RepositoryCreateManyProjectInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default RepositoryCreateManyProjectInputEnvelopeSchema;
