import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateManyUserInputEnvelopeSchema } from "./RoadmapCreateManyUserInputEnvelopeSchema";
import { RoadmapCreateOrConnectWithoutUserInputSchema } from "./RoadmapCreateOrConnectWithoutUserInputSchema";
import { RoadmapCreateWithoutUserInputSchema } from "./RoadmapCreateWithoutUserInputSchema";
import { RoadmapUncheckedCreateWithoutUserInputSchema } from "./RoadmapUncheckedCreateWithoutUserInputSchema";
import { RoadmapWhereUniqueInputSchema } from "./RoadmapWhereUniqueInputSchema";

export const RoadmapCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoadmapCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutUserInputSchema),
        z.lazy(() => RoadmapCreateWithoutUserInputSchema).array(),
        z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => RoadmapCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapCreateNestedManyWithoutUserInputSchema;
