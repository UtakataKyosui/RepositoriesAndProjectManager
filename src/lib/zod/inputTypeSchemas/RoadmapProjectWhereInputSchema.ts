import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFilterSchema } from "./IntFilterSchema";
import { ProjectScalarRelationFilterSchema } from "./ProjectScalarRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { RoadmapScalarRelationFilterSchema } from "./RoadmapScalarRelationFilterSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const RoadmapProjectWhereInputSchema: z.ZodType<Prisma.RoadmapProjectWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapProjectWhereInputSchema),
        z.lazy(() => RoadmapProjectWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapProjectWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapProjectWhereInputSchema),
        z.lazy(() => RoadmapProjectWhereInputSchema).array(),
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
    roadmap: z
      .union([
        z.lazy(() => RoadmapScalarRelationFilterSchema),
        z.lazy(() => RoadmapWhereInputSchema),
      ])
      .optional(),
    project: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
  });

export default RoadmapProjectWhereInputSchema;
