import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateWithoutUserInputSchema } from "./ProjectCreateWithoutUserInputSchema";
import { ProjectUncheckedCreateWithoutUserInputSchema } from "./ProjectUncheckedCreateWithoutUserInputSchema";
import { ProjectUncheckedUpdateWithoutUserInputSchema } from "./ProjectUncheckedUpdateWithoutUserInputSchema";
import { ProjectUpdateWithoutUserInputSchema } from "./ProjectUpdateWithoutUserInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default ProjectUpsertWithWhereUniqueWithoutUserInputSchema;
