import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const RoadmapProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoadmapProjectScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => RoadmapProjectScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapProjectScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => RoadmapProjectScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    projectId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export default RoadmapProjectScalarWhereWithAggregatesInputSchema;
