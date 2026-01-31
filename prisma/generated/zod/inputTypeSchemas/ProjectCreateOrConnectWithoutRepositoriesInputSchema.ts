import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutRepositoriesInputSchema } from "./ProjectCreateWithoutRepositoriesInputSchema";
import { ProjectUncheckedCreateWithoutRepositoriesInputSchema } from "./ProjectUncheckedCreateWithoutRepositoriesInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateOrConnectWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRepositoriesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
    ]),
  });

export default ProjectCreateOrConnectWithoutRepositoriesInputSchema;
