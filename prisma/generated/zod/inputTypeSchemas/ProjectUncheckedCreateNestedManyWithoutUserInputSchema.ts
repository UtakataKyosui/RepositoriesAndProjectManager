import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateManyUserInputEnvelopeSchema } from "./ProjectCreateManyUserInputEnvelopeSchema";
import { ProjectCreateOrConnectWithoutUserInputSchema } from "./ProjectCreateOrConnectWithoutUserInputSchema";
import { ProjectCreateWithoutUserInputSchema } from "./ProjectCreateWithoutUserInputSchema";
import { ProjectUncheckedCreateWithoutUserInputSchema } from "./ProjectUncheckedCreateWithoutUserInputSchema";
import { ProjectWhereUniqueInputSchema } from "./ProjectWhereUniqueInputSchema";

export const ProjectUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutUserInputSchema),
        z.lazy(() => ProjectCreateWithoutUserInputSchema).array(),
        z.lazy(() => ProjectUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProjectCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => ProjectCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default ProjectUncheckedCreateNestedManyWithoutUserInputSchema;
