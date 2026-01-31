import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryScalarWhereInputSchema } from "./RepositoryScalarWhereInputSchema";
import { RepositoryUncheckedUpdateManyWithoutProjectInputSchema } from "./RepositoryUncheckedUpdateManyWithoutProjectInputSchema";
import { RepositoryUpdateManyMutationInputSchema } from "./RepositoryUpdateManyMutationInputSchema";

export const RepositoryUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpdateManyWithWhereWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RepositoryUpdateManyMutationInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateManyWithoutProjectInputSchema),
    ]),
  });

export default RepositoryUpdateManyWithWhereWithoutProjectInputSchema;
