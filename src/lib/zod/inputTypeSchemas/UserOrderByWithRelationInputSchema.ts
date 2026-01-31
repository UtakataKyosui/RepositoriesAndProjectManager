import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountOrderByRelationAggregateInputSchema } from "./AccountOrderByRelationAggregateInputSchema";
import { ProjectOrderByRelationAggregateInputSchema } from "./ProjectOrderByRelationAggregateInputSchema";
import { RoadmapOrderByRelationAggregateInputSchema } from "./RoadmapOrderByRelationAggregateInputSchema";
import { SessionOrderByRelationAggregateInputSchema } from "./SessionOrderByRelationAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectOrderByRelationAggregateInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapOrderByRelationAggregateInputSchema)
      .optional(),
  });

export default UserOrderByWithRelationInputSchema;
