import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema";
import { ProjectFindManyArgsSchema } from "../outputTypeSchemas/ProjectFindManyArgsSchema";
import { RoadmapFindManyArgsSchema } from "../outputTypeSchemas/RoadmapFindManyArgsSchema";
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema";
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema";

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
      .optional(),
    projects: z
      .union([z.boolean(), z.lazy(() => ProjectFindManyArgsSchema)])
      .optional(),
    roadmaps: z
      .union([z.boolean(), z.lazy(() => RoadmapFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default UserIncludeSchema;
