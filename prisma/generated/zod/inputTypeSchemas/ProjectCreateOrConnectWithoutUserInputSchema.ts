import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutUserInputSchema } from "./ProjectCreateWithoutUserInputSchema";
import { ProjectUncheckedCreateWithoutUserInputSchema } from "./ProjectUncheckedCreateWithoutUserInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default ProjectCreateOrConnectWithoutUserInputSchema;
