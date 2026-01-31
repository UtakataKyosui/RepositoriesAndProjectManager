import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateOrConnectWithoutRepositoriesInputSchema } from "./ProjectCreateOrConnectWithoutRepositoriesInputSchema";
import { ProjectCreateWithoutRepositoriesInputSchema } from "./ProjectCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedCreateWithoutRepositoriesInputSchema } from "./ProjectUncheckedCreateWithoutRepositoriesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateNestedOneWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRepositoriesInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export default ProjectCreateNestedOneWithoutRepositoriesInputSchema;
