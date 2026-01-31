import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFilterSchema } from "./IntFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const RoadmapProjectScalarWhereInputSchema: z.ZodType<Prisma.RoadmapProjectScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapProjectScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    roadmapId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    projectId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export default RoadmapProjectScalarWhereInputSchema;
