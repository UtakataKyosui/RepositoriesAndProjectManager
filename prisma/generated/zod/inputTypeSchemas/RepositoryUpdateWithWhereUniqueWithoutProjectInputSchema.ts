import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryUncheckedUpdateWithoutProjectInputSchema } from "./RepositoryUncheckedUpdateWithoutProjectInputSchema";
import { RepositoryUpdateWithoutProjectInputSchema } from "./RepositoryUpdateWithoutProjectInputSchema";
import { RepositoryWhereUniqueInputSchema } from "./RepositoryWhereUniqueInputSchema";

export const RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpdateWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RepositoryUpdateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputSchema),
    ]),
  });

export default RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema;
