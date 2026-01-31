import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectUncheckedUpdateWithoutUserInputSchema } from "./ProjectUncheckedUpdateWithoutUserInputSchema";
import { ProjectUpdateWithoutUserInputSchema } from "./ProjectUpdateWithoutUserInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export default ProjectUpdateWithWhereUniqueWithoutUserInputSchema;
