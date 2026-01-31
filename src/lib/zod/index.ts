import type { Prisma } from "@prisma/client";
import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "emailVerified",
  "image",
  "createdAt",
  "updatedAt",
]);

export const SessionScalarFieldEnumSchema = z.enum([
  "id",
  "expiresAt",
  "token",
  "createdAt",
  "updatedAt",
  "ipAddress",
  "userAgent",
  "userId",
]);

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "accountId",
  "providerId",
  "userId",
  "accessToken",
  "refreshToken",
  "idToken",
  "accessTokenExpiresAt",
  "refreshTokenExpiresAt",
  "scope",
  "password",
  "createdAt",
  "updatedAt",
]);

export const VerificationScalarFieldEnumSchema = z.enum([
  "id",
  "identifier",
  "value",
  "expiresAt",
  "createdAt",
  "updatedAt",
]);

export const ProjectScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "published",
  "createdAt",
  "updatedAt",
  "userId",
]);

export const RepositoryScalarFieldEnumSchema = z.enum([
  "id",
  "url",
  "name",
  "projectId",
]);

export const ProjectDependencyScalarFieldEnumSchema = z.enum([
  "dependencyId",
  "dependentId",
]);

export const RoadmapScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "createdAt",
  "updatedAt",
  "userId",
]);

export const RoadmapGoalScalarFieldEnumSchema = z.enum([
  "id",
  "content",
  "order",
  "isCompleted",
  "roadmapId",
]);

export const RoadmapProjectScalarFieldEnumSchema = z.enum([
  "id",
  "order",
  "roadmapId",
  "projectId",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.cuid(),
  name: z.string().nullable(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.cuid(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.cuid(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  idToken: z.string().nullable(),
  accessTokenExpiresAt: z.coerce.date().nullable(),
  refreshTokenExpiresAt: z.coerce.date().nullable(),
  scope: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Account = z.infer<typeof AccountSchema>;

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.cuid(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
});

export type Verification = z.infer<typeof VerificationSchema>;

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  id: z.cuid(),
  title: z.string(),
  description: z.string().nullable(),
  published: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

/////////////////////////////////////////
// REPOSITORY SCHEMA
/////////////////////////////////////////

export const RepositorySchema = z.object({
  id: z.cuid(),
  url: z.string(),
  name: z.string().nullable(),
  projectId: z.string(),
});

export type Repository = z.infer<typeof RepositorySchema>;

/////////////////////////////////////////
// PROJECT DEPENDENCY SCHEMA
/////////////////////////////////////////

export const ProjectDependencySchema = z.object({
  dependencyId: z.string(),
  dependentId: z.string(),
});

export type ProjectDependency = z.infer<typeof ProjectDependencySchema>;

/////////////////////////////////////////
// ROADMAP SCHEMA
/////////////////////////////////////////

export const RoadmapSchema = z.object({
  id: z.cuid(),
  title: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
});

export type Roadmap = z.infer<typeof RoadmapSchema>;

/////////////////////////////////////////
// ROADMAP GOAL SCHEMA
/////////////////////////////////////////

export const RoadmapGoalSchema = z.object({
  id: z.cuid(),
  content: z.string(),
  order: z.number().int(),
  isCompleted: z.boolean(),
  roadmapId: z.string(),
});

export type RoadmapGoal = z.infer<typeof RoadmapGoalSchema>;

/////////////////////////////////////////
// ROADMAP PROJECT SCHEMA
/////////////////////////////////////////

export const RoadmapProjectSchema = z.object({
  id: z.cuid(),
  order: z.number().int(),
  roadmapId: z.string(),
  projectId: z.string(),
});

export type RoadmapProject = z.infer<typeof RoadmapProjectSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

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

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      sessions: z.boolean().optional(),
      accounts: z.boolean().optional(),
      projects: z.boolean().optional(),
      roadmaps: z.boolean().optional(),
    })
    .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
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

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z
  .object({
    select: z.lazy(() => SessionSelectSchema).optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
  })
  .strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    token: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
  .object({
    select: z.lazy(() => AccountSelectSchema).optional(),
    include: z.lazy(() => AccountIncludeSchema).optional(),
  })
  .strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    userId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    idToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// VERIFICATION
//------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
  .object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

// PROJECT
//------------------------------------------------------

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    repositories: z
      .union([z.boolean(), z.lazy(() => RepositoryFindManyArgsSchema)])
      .optional(),
    dependencies: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    dependents: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    roadmapProjects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ProjectArgsSchema: z.ZodType<Prisma.ProjectDefaultArgs> = z
  .object({
    select: z.lazy(() => ProjectSelectSchema).optional(),
    include: z.lazy(() => ProjectIncludeSchema).optional(),
  })
  .strict();

export const ProjectCountOutputTypeArgsSchema: z.ZodType<Prisma.ProjectCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ProjectCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> =
  z
    .object({
      repositories: z.boolean().optional(),
      dependencies: z.boolean().optional(),
      dependents: z.boolean().optional(),
      roadmapProjects: z.boolean().optional(),
    })
    .strict();

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    published: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    repositories: z
      .union([z.boolean(), z.lazy(() => RepositoryFindManyArgsSchema)])
      .optional(),
    dependencies: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    dependents: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    roadmapProjects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// REPOSITORY
//------------------------------------------------------

export const RepositoryIncludeSchema: z.ZodType<Prisma.RepositoryInclude> = z
  .object({
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
  })
  .strict();

export const RepositoryArgsSchema: z.ZodType<Prisma.RepositoryDefaultArgs> = z
  .object({
    select: z.lazy(() => RepositorySelectSchema).optional(),
    include: z.lazy(() => RepositoryIncludeSchema).optional(),
  })
  .strict();

export const RepositorySelectSchema: z.ZodType<Prisma.RepositorySelect> = z
  .object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
  })
  .strict();

// PROJECT DEPENDENCY
//------------------------------------------------------

export const ProjectDependencyIncludeSchema: z.ZodType<Prisma.ProjectDependencyInclude> =
  z
    .object({
      dependency: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
      dependent: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export const ProjectDependencyArgsSchema: z.ZodType<Prisma.ProjectDependencyDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ProjectDependencySelectSchema).optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
    })
    .strict();

export const ProjectDependencySelectSchema: z.ZodType<Prisma.ProjectDependencySelect> =
  z
    .object({
      dependencyId: z.boolean().optional(),
      dependentId: z.boolean().optional(),
      dependency: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
      dependent: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

// ROADMAP
//------------------------------------------------------

export const RoadmapIncludeSchema: z.ZodType<Prisma.RoadmapInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    goals: z
      .union([z.boolean(), z.lazy(() => RoadmapGoalFindManyArgsSchema)])
      .optional(),
    projects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const RoadmapArgsSchema: z.ZodType<Prisma.RoadmapDefaultArgs> = z
  .object({
    select: z.lazy(() => RoadmapSelectSchema).optional(),
    include: z.lazy(() => RoadmapIncludeSchema).optional(),
  })
  .strict();

export const RoadmapCountOutputTypeArgsSchema: z.ZodType<Prisma.RoadmapCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => RoadmapCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const RoadmapCountOutputTypeSelectSchema: z.ZodType<Prisma.RoadmapCountOutputTypeSelect> =
  z
    .object({
      goals: z.boolean().optional(),
      projects: z.boolean().optional(),
    })
    .strict();

export const RoadmapSelectSchema: z.ZodType<Prisma.RoadmapSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    goals: z
      .union([z.boolean(), z.lazy(() => RoadmapGoalFindManyArgsSchema)])
      .optional(),
    projects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// ROADMAP GOAL
//------------------------------------------------------

export const RoadmapGoalIncludeSchema: z.ZodType<Prisma.RoadmapGoalInclude> = z
  .object({
    roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsSchema)]).optional(),
  })
  .strict();

export const RoadmapGoalArgsSchema: z.ZodType<Prisma.RoadmapGoalDefaultArgs> = z
  .object({
    select: z.lazy(() => RoadmapGoalSelectSchema).optional(),
    include: z.lazy(() => RoadmapGoalIncludeSchema).optional(),
  })
  .strict();

export const RoadmapGoalSelectSchema: z.ZodType<Prisma.RoadmapGoalSelect> = z
  .object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsSchema)]).optional(),
  })
  .strict();

// ROADMAP PROJECT
//------------------------------------------------------

export const RoadmapProjectIncludeSchema: z.ZodType<Prisma.RoadmapProjectInclude> =
  z
    .object({
      roadmap: z
        .union([z.boolean(), z.lazy(() => RoadmapArgsSchema)])
        .optional(),
      project: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export const RoadmapProjectArgsSchema: z.ZodType<Prisma.RoadmapProjectDefaultArgs> =
  z
    .object({
      select: z.lazy(() => RoadmapProjectSelectSchema).optional(),
      include: z.lazy(() => RoadmapProjectIncludeSchema).optional(),
    })
    .strict();

export const RoadmapProjectSelectSchema: z.ZodType<Prisma.RoadmapProjectSelect> =
  z
    .object({
      id: z.boolean().optional(),
      order: z.boolean().optional(),
      roadmapId: z.boolean().optional(),
      projectId: z.boolean().optional(),
      roadmap: z
        .union([z.boolean(), z.lazy(() => RoadmapArgsSchema)])
        .optional(),
      project: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
    projects: z.lazy(() => ProjectListRelationFilterSchema).optional(),
    roadmaps: z.lazy(() => RoadmapListRelationFilterSchema).optional(),
  });

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

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.cuid(),
        email: z.string(),
      }),
      z.object({
        id: z.cuid(),
      }),
      z.object({
        email: z.string(),
      }),
    ])
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        email: z.string().optional(),
        AND: z
          .union([
            z.lazy(() => UserWhereInputSchema),
            z.lazy(() => UserWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => UserWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => UserWhereInputSchema),
            z.lazy(() => UserWhereInputSchema).array(),
          ])
          .optional(),
        name: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        emailVerified: z
          .union([z.lazy(() => BoolFilterSchema), z.boolean()])
          .optional(),
        image: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
        accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
        projects: z.lazy(() => ProjectListRelationFilterSchema).optional(),
        roadmaps: z.lazy(() => RoadmapListRelationFilterSchema).optional(),
      }),
    );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
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
    _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  });

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    name: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    emailVerified: z
      .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
      .optional(),
    image: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
  });

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    ipAddress: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userAgent: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  });

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ipAddress: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    userAgent: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  });

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.cuid(),
        token: z.string(),
      }),
      z.object({
        id: z.cuid(),
      }),
      z.object({
        token: z.string(),
      }),
    ])
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        token: z.string().optional(),
        AND: z
          .union([
            z.lazy(() => SessionWhereInputSchema),
            z.lazy(() => SessionWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => SessionWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => SessionWhereInputSchema),
            z.lazy(() => SessionWhereInputSchema).array(),
          ])
          .optional(),
        expiresAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        ipAddress: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        userAgent: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        userId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        user: z
          .union([
            z.lazy(() => UserScalarRelationFilterSchema),
            z.lazy(() => UserWhereInputSchema),
          ])
          .optional(),
      }),
    );

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ipAddress: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    userAgent: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
  });

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    token: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accountId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    providerId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accessToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    refreshToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    idToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    scope: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  });

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    refreshToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    idToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    accessTokenExpiresAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    refreshTokenExpiresAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    scope: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  });

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => AccountWhereInputSchema),
            z.lazy(() => AccountWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => AccountWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => AccountWhereInputSchema),
            z.lazy(() => AccountWhereInputSchema).array(),
          ])
          .optional(),
        accountId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        providerId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        userId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        accessToken: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        refreshToken: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        idToken: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        accessTokenExpiresAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        refreshTokenExpiresAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        scope: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        password: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        user: z
          .union([
            z.lazy(() => UserScalarRelationFilterSchema),
            z.lazy(() => UserWhereInputSchema),
          ])
          .optional(),
      }),
    );

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    refreshToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    idToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    accessTokenExpiresAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    refreshTokenExpiresAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    scope: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  });

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    accountId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    providerId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    accessToken: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
  });

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => VerificationWhereInputSchema),
        z.lazy(() => VerificationWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VerificationWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VerificationWhereInputSchema),
        z.lazy(() => VerificationWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    identifier: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
  });

export const VerificationOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
  });

export const VerificationWhereUniqueInputSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => VerificationWhereInputSchema),
            z.lazy(() => VerificationWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => VerificationWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => VerificationWhereInputSchema),
            z.lazy(() => VerificationWhereInputSchema).array(),
          ])
          .optional(),
        identifier: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        value: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        expiresAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        updatedAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
      }),
    );

export const VerificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => VerificationCountOrderByAggregateInputSchema)
      .optional(),
    _max: z.lazy(() => VerificationMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => VerificationMinOrderByAggregateInputSchema).optional(),
  });

export const VerificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
        z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VerificationScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
        z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    identifier: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  });

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectWhereInputSchema),
        z.lazy(() => ProjectWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectWhereInputSchema),
        z.lazy(() => ProjectWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    repositories: z.lazy(() => RepositoryListRelationFilterSchema).optional(),
    dependencies: z
      .lazy(() => ProjectDependencyListRelationFilterSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyListRelationFilterSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectListRelationFilterSchema)
      .optional(),
  });

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    repositories: z
      .lazy(() => RepositoryOrderByRelationAggregateInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyOrderByRelationAggregateInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyOrderByRelationAggregateInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectOrderByRelationAggregateInputSchema)
      .optional(),
  });

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => ProjectWhereInputSchema),
            z.lazy(() => ProjectWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => ProjectWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => ProjectWhereInputSchema),
            z.lazy(() => ProjectWhereInputSchema).array(),
          ])
          .optional(),
        title: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        description: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        published: z
          .union([z.lazy(() => BoolFilterSchema), z.boolean()])
          .optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        userId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        user: z
          .union([
            z.lazy(() => UserScalarRelationFilterSchema),
            z.lazy(() => UserWhereInputSchema),
          ])
          .optional(),
        repositories: z
          .lazy(() => RepositoryListRelationFilterSchema)
          .optional(),
        dependencies: z
          .lazy(() => ProjectDependencyListRelationFilterSchema)
          .optional(),
        dependents: z
          .lazy(() => ProjectDependencyListRelationFilterSchema)
          .optional(),
        roadmapProjects: z
          .lazy(() => RoadmapProjectListRelationFilterSchema)
          .optional(),
      }),
    );

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional(),
  });

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    description: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export const RepositoryWhereInputSchema: z.ZodType<Prisma.RepositoryWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryWhereInputSchema),
        z.lazy(() => RepositoryWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryWhereInputSchema),
        z.lazy(() => RepositoryWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    project: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
  });

export const RepositoryOrderByWithRelationInputSchema: z.ZodType<Prisma.RepositoryOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export const RepositoryWhereUniqueInputSchema: z.ZodType<Prisma.RepositoryWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => RepositoryWhereInputSchema),
            z.lazy(() => RepositoryWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RepositoryWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RepositoryWhereInputSchema),
            z.lazy(() => RepositoryWhereInputSchema).array(),
          ])
          .optional(),
        url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        projectId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        project: z
          .union([
            z.lazy(() => ProjectScalarRelationFilterSchema),
            z.lazy(() => ProjectWhereInputSchema),
          ])
          .optional(),
      }),
    );

export const RepositoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.RepositoryOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RepositoryCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RepositoryMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RepositoryMinOrderByAggregateInputSchema).optional(),
  });

export const RepositoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RepositoryScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    url: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    name: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export const ProjectDependencyWhereInputSchema: z.ZodType<Prisma.ProjectDependencyWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyWhereInputSchema),
        z.lazy(() => ProjectDependencyWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyWhereInputSchema),
        z.lazy(() => ProjectDependencyWhereInputSchema).array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependency: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
    dependent: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
  });

export const ProjectDependencyOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithRelationInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
    dependency: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
    dependent: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export const ProjectDependencyWhereUniqueInputSchema: z.ZodType<Prisma.ProjectDependencyWhereUniqueInput> =
  z
    .object({
      dependencyId_dependentId: z.lazy(
        () => ProjectDependencyDependencyIdDependentIdCompoundUniqueInputSchema,
      ),
    })
    .and(
      z.strictObject({
        dependencyId_dependentId: z
          .lazy(
            () =>
              ProjectDependencyDependencyIdDependentIdCompoundUniqueInputSchema,
          )
          .optional(),
        AND: z
          .union([
            z.lazy(() => ProjectDependencyWhereInputSchema),
            z.lazy(() => ProjectDependencyWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => ProjectDependencyWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => ProjectDependencyWhereInputSchema),
            z.lazy(() => ProjectDependencyWhereInputSchema).array(),
          ])
          .optional(),
        dependencyId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        dependentId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        dependency: z
          .union([
            z.lazy(() => ProjectScalarRelationFilterSchema),
            z.lazy(() => ProjectWhereInputSchema),
          ])
          .optional(),
        dependent: z
          .union([
            z.lazy(() => ProjectScalarRelationFilterSchema),
            z.lazy(() => ProjectWhereInputSchema),
          ])
          .optional(),
      }),
    );

export const ProjectDependencyOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithAggregationInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectDependencyCountOrderByAggregateInputSchema)
      .optional(),
    _max: z
      .lazy(() => ProjectDependencyMaxOrderByAggregateInputSchema)
      .optional(),
    _min: z
      .lazy(() => ProjectDependencyMinOrderByAggregateInputSchema)
      .optional(),
  });

export const ProjectDependencyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export const RoadmapWhereInputSchema: z.ZodType<Prisma.RoadmapWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapWhereInputSchema),
        z.lazy(() => RoadmapWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapWhereInputSchema),
        z.lazy(() => RoadmapWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    goals: z.lazy(() => RoadmapGoalListRelationFilterSchema).optional(),
    projects: z.lazy(() => RoadmapProjectListRelationFilterSchema).optional(),
  });

export const RoadmapOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    goals: z
      .lazy(() => RoadmapGoalOrderByRelationAggregateInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectOrderByRelationAggregateInputSchema)
      .optional(),
  });

export const RoadmapWhereUniqueInputSchema: z.ZodType<Prisma.RoadmapWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => RoadmapWhereInputSchema),
            z.lazy(() => RoadmapWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RoadmapWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RoadmapWhereInputSchema),
            z.lazy(() => RoadmapWhereInputSchema).array(),
          ])
          .optional(),
        title: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        description: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        userId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        user: z
          .union([
            z.lazy(() => UserScalarRelationFilterSchema),
            z.lazy(() => UserWhereInputSchema),
          ])
          .optional(),
        goals: z.lazy(() => RoadmapGoalListRelationFilterSchema).optional(),
        projects: z
          .lazy(() => RoadmapProjectListRelationFilterSchema)
          .optional(),
      }),
    );

export const RoadmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoadmapCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapMinOrderByAggregateInputSchema).optional(),
  });

export const RoadmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoadmapScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    description: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export const RoadmapGoalWhereInputSchema: z.ZodType<Prisma.RoadmapGoalWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapGoalWhereInputSchema),
        z.lazy(() => RoadmapGoalWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapGoalWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapGoalWhereInputSchema),
        z.lazy(() => RoadmapGoalWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    isCompleted: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    roadmap: z
      .union([
        z.lazy(() => RoadmapScalarRelationFilterSchema),
        z.lazy(() => RoadmapWhereInputSchema),
      ])
      .optional(),
  });

export const RoadmapGoalOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    roadmap: z.lazy(() => RoadmapOrderByWithRelationInputSchema).optional(),
  });

export const RoadmapGoalWhereUniqueInputSchema: z.ZodType<Prisma.RoadmapGoalWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => RoadmapGoalWhereInputSchema),
            z.lazy(() => RoadmapGoalWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RoadmapGoalWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RoadmapGoalWhereInputSchema),
            z.lazy(() => RoadmapGoalWhereInputSchema).array(),
          ])
          .optional(),
        content: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        order: z
          .union([z.lazy(() => IntFilterSchema), z.number().int()])
          .optional(),
        isCompleted: z
          .union([z.lazy(() => BoolFilterSchema), z.boolean()])
          .optional(),
        roadmapId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        roadmap: z
          .union([
            z.lazy(() => RoadmapScalarRelationFilterSchema),
            z.lazy(() => RoadmapWhereInputSchema),
          ])
          .optional(),
      }),
    );

export const RoadmapGoalOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoadmapGoalCountOrderByAggregateInputSchema)
      .optional(),
    _avg: z.lazy(() => RoadmapGoalAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapGoalMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapGoalMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => RoadmapGoalSumOrderByAggregateInputSchema).optional(),
  });

export const RoadmapGoalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
    isCompleted: z
      .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

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

export const RoadmapProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    roadmap: z.lazy(() => RoadmapOrderByWithRelationInputSchema).optional(),
    project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export const RoadmapProjectWhereUniqueInputSchema: z.ZodType<Prisma.RoadmapProjectWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.cuid(),
        roadmapId_projectId: z.lazy(
          () => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.cuid(),
      }),
      z.object({
        roadmapId_projectId: z.lazy(
          () => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        roadmapId_projectId: z
          .lazy(() => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema)
          .optional(),
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
        order: z
          .union([z.lazy(() => IntFilterSchema), z.number().int()])
          .optional(),
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
      }),
    );

export const RoadmapProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoadmapProjectCountOrderByAggregateInputSchema)
      .optional(),
    _avg: z.lazy(() => RoadmapProjectAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapProjectMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapProjectMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => RoadmapProjectSumOrderByAggregateInputSchema).optional(),
  });

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

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
  });

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
  });

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema)
      .optional(),
  });

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
  });

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
  });

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    userId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  });

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema)
      .optional(),
  });

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    userId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  });

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const VerificationCreateInputSchema: z.ZodType<Prisma.VerificationCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  });

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  });

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    identifier: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    value: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const VerificationUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    identifier: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    value: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  });

export const VerificationUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    identifier: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    value: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const VerificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    identifier: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    value: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const ProjectCreateInputSchema: z.ZodType<Prisma.ProjectCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export const ProjectUpdateInputSchema: z.ZodType<Prisma.ProjectUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    repositories: z
      .lazy(() => RepositoryUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
  });

export const ProjectUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const ProjectUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RepositoryCreateInputSchema: z.ZodType<Prisma.RepositoryCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    project: z.lazy(() => ProjectCreateNestedOneWithoutRepositoriesInputSchema),
  });

export const RepositoryUncheckedCreateInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    projectId: z.string(),
  });

export const RepositoryUpdateInputSchema: z.ZodType<Prisma.RepositoryUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    project: z
      .lazy(() => ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema)
      .optional(),
  });

export const RepositoryUncheckedUpdateInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RepositoryCreateManyInputSchema: z.ZodType<Prisma.RepositoryCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    projectId: z.string(),
  });

export const RepositoryUpdateManyMutationInputSchema: z.ZodType<Prisma.RepositoryUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const RepositoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const ProjectDependencyCreateInputSchema: z.ZodType<Prisma.ProjectDependencyCreateInput> =
  z.strictObject({
    dependency: z.lazy(
      () => ProjectCreateNestedOneWithoutDependenciesInputSchema,
    ),
    dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputSchema),
  });

export const ProjectDependencyUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export const ProjectDependencyUpdateInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateInput> =
  z.strictObject({
    dependency: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema)
      .optional(),
    dependent: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema)
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const ProjectDependencyCreateManyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export const ProjectDependencyUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyMutationInput> =
  z.strictObject({});

export const ProjectDependencyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapCreateInputSchema: z.ZodType<Prisma.RoadmapCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputSchema),
    goals: z
      .lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export const RoadmapUncheckedCreateInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema,
      )
      .optional(),
  });

export const RoadmapUpdateInputSchema: z.ZodType<Prisma.RoadmapUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema)
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export const RoadmapUncheckedUpdateInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema,
      )
      .optional(),
  });

export const RoadmapCreateManyInputSchema: z.ZodType<Prisma.RoadmapCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
  });

export const RoadmapUpdateManyMutationInputSchema: z.ZodType<Prisma.RoadmapUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const RoadmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalCreateInputSchema: z.ZodType<Prisma.RoadmapGoalCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutGoalsInputSchema),
  });

export const RoadmapGoalUncheckedCreateInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.string(),
  });

export const RoadmapGoalUpdateInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    roadmap: z
      .lazy(() => RoadmapUpdateOneRequiredWithoutGoalsNestedInputSchema)
      .optional(),
  });

export const RoadmapGoalUncheckedUpdateInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalCreateManyInputSchema: z.ZodType<Prisma.RoadmapGoalCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.string(),
  });

export const RoadmapGoalUpdateManyMutationInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectCreateInputSchema: z.ZodType<Prisma.RoadmapProjectCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputSchema),
    project: z.lazy(
      () => ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema,
    ),
  });

export const RoadmapProjectUncheckedCreateInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
    projectId: z.string(),
  });

export const RoadmapProjectUpdateInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmap: z
      .lazy(() => RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    project: z
      .lazy(
        () => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema,
      )
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectCreateManyInputSchema: z.ZodType<Prisma.RoadmapProjectCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
    projectId: z.string(),
  });

export const RoadmapProjectUpdateManyMutationInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyMutationInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => SessionWhereInputSchema).optional(),
    some: z.lazy(() => SessionWhereInputSchema).optional(),
    none: z.lazy(() => SessionWhereInputSchema).optional(),
  });

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => AccountWhereInputSchema).optional(),
    some: z.lazy(() => AccountWhereInputSchema).optional(),
    none: z.lazy(() => AccountWhereInputSchema).optional(),
  });

export const ProjectListRelationFilterSchema: z.ZodType<Prisma.ProjectListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => ProjectWhereInputSchema).optional(),
    some: z.lazy(() => ProjectWhereInputSchema).optional(),
    none: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const RoadmapListRelationFilterSchema: z.ZodType<Prisma.RoadmapListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> =
  z.strictObject({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  });

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoadmapOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  });

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z.strictObject({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional(),
  });

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  });

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> =
  z.strictObject({
    is: z.lazy(() => UserWhereInputSchema).optional(),
    isNot: z.lazy(() => UserWhereInputSchema).optional(),
  });

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ipAddress: z.lazy(() => SortOrderSchema).optional(),
    userAgent: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ipAddress: z.lazy(() => SortOrderSchema).optional(),
    userAgent: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ipAddress: z.lazy(() => SortOrderSchema).optional(),
    userAgent: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableFilterSchema),
      ])
      .optional()
      .nullable(),
  });

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z.lazy(() => SortOrderSchema).optional(),
    refreshToken: z.lazy(() => SortOrderSchema).optional(),
    idToken: z.lazy(() => SortOrderSchema).optional(),
    accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    scope: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z.lazy(() => SortOrderSchema).optional(),
    refreshToken: z.lazy(() => SortOrderSchema).optional(),
    idToken: z.lazy(() => SortOrderSchema).optional(),
    accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    scope: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z.lazy(() => SortOrderSchema).optional(),
    refreshToken: z.lazy(() => SortOrderSchema).optional(),
    idToken: z.lazy(() => SortOrderSchema).optional(),
    accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
    scope: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  });

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const VerificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const VerificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const RepositoryListRelationFilterSchema: z.ZodType<Prisma.RepositoryListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RepositoryWhereInputSchema).optional(),
    some: z.lazy(() => RepositoryWhereInputSchema).optional(),
    none: z.lazy(() => RepositoryWhereInputSchema).optional(),
  });

export const ProjectDependencyListRelationFilterSchema: z.ZodType<Prisma.ProjectDependencyListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
    some: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
    none: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
  });

export const RoadmapProjectListRelationFilterSchema: z.ZodType<Prisma.RoadmapProjectListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
  });

export const RepositoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RepositoryOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectDependencyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapProjectOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectScalarRelationFilterSchema: z.ZodType<Prisma.ProjectScalarRelationFilter> =
  z.strictObject({
    is: z.lazy(() => ProjectWhereInputSchema).optional(),
    isNot: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const RepositoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.RepositoryCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RepositoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RepositoryMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RepositoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.RepositoryMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectDependencyDependencyIdDependentIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectDependencyDependencyIdDependentIdCompoundUniqueInput> =
  z.strictObject({
    dependencyId: z.string(),
    dependentId: z.string(),
  });

export const ProjectDependencyCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyCountOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectDependencyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyMaxOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProjectDependencyMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyMinOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapGoalListRelationFilterSchema: z.ZodType<Prisma.RoadmapGoalListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
  });

export const RoadmapGoalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  });

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
});

export const RoadmapScalarRelationFilterSchema: z.ZodType<Prisma.RoadmapScalarRelationFilter> =
  z.strictObject({
    is: z.lazy(() => RoadmapWhereInputSchema).optional(),
    isNot: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export const RoadmapGoalCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapGoalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalAvgOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapGoalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapGoalMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapGoalSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalSumOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoadmapProjectRoadmapIdProjectIdCompoundUniqueInput> =
  z.strictObject({
    roadmapId: z.string(),
    projectId: z.string(),
  });

export const RoadmapProjectCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectAvgOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapProjectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapProjectMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export const RoadmapProjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectSumOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProjectCreateNestedManyWithoutUserInput> =
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

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

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

export const RoadmapUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateNestedManyWithoutUserInput> =
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

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional(),
  });

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional().nullable(),
  });

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.boolean().optional(),
  });

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.coerce.date().optional(),
  });

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SessionScalarWhereInputSchema),
        z.lazy(() => SessionScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AccountScalarWhereInputSchema),
        z.lazy(() => AccountScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProjectUpdateManyWithoutUserNestedInput> =
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
    upsert: z
      .union([
        z.lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateManyWithoutUserNestedInput> =
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
    upsert: z
      .union([
        z.lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputSchema),
        z.lazy(() => SessionWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SessionScalarWhereInputSchema),
        z.lazy(() => SessionScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputSchema),
        z.lazy(() => AccountWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AccountScalarWhereInputSchema),
        z.lazy(() => AccountScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutUserNestedInput> =
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
    upsert: z
      .union([
        z.lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => ProjectUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputSchema),
        z.lazy(() => ProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => ProjectUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => ProjectUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateManyWithoutUserNestedInput> =
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
    upsert: z
      .union([
        z.lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpsertWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapCreateManyUserInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapWhereUniqueInputSchema),
        z.lazy(() => RoadmapWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema),
        z
          .lazy(() => RoadmapUpdateWithWhereUniqueWithoutUserInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => RoadmapUpdateManyWithWhereWithoutUserInputSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
      ])
      .optional(),
  });

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.coerce.date().optional().nullable(),
  });

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ])
      .optional(),
  });

export const UserCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProjectsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export const RepositoryCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyCreateNestedManyWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependencyInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyCreateNestedManyWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateNestedManyWithoutDependentInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependentInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateNestedManyWithoutDependentInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependentInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const UserUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProjectsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutProjectsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutProjectsInputSchema),
        z.lazy(() => UserUpdateWithoutProjectsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
      ])
      .optional(),
  });

export const RepositoryUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RepositoryUpdateManyWithoutProjectNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithoutDependencyNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUpdateManyWithoutDependentNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithoutDependentNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependentInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithoutProjectNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateManyWithoutProjectNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependentInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const ProjectCreateNestedOneWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRepositoriesInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export const ProjectUpdateOneRequiredWithoutRepositoriesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRepositoriesNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputSchema)
      .optional(),
    upsert: z
      .lazy(() => ProjectUpsertWithoutRepositoriesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
      ])
      .optional(),
  });

export const ProjectCreateNestedOneWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependenciesInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependenciesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export const ProjectCreateNestedOneWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependentsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependentsInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export const ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependenciesNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependenciesInputSchema)
      .optional(),
    upsert: z
      .lazy(() => ProjectUpsertWithoutDependenciesInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
      ])
      .optional(),
  });

export const ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDependentsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutDependentsInputSchema)
      .optional(),
    upsert: z.lazy(() => ProjectUpsertWithoutDependentsInputSchema).optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProjectUpdateToOneWithWhereWithoutDependentsInputSchema),
        z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
      ])
      .optional(),
  });

export const UserCreateNestedOneWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoadmapsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutRoadmapsInputSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export const RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateNestedManyWithoutRoadmapInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutRoadmapInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoadmapsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutRoadmapsInputSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutRoadmapsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutRoadmapsInputSchema),
        z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
      ])
      .optional(),
  });

export const RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapGoalCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
        z.lazy(() => RoadmapGoalWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
        ),
        z
          .lazy(
            () => RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoadmapProjectScalarWhereInputSchema),
        z.lazy(() => RoadmapProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const RoadmapCreateNestedOneWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutGoalsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutGoalsInputSchema)
      .optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
  });

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.number().optional(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  });

export const RoadmapUpdateOneRequiredWithoutGoalsNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutGoalsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutGoalsInputSchema)
      .optional(),
    upsert: z.lazy(() => RoadmapUpsertWithoutGoalsInputSchema).optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
        z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
      ])
      .optional(),
  });

export const RoadmapCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateNestedOneWithoutProjectsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
  });

export const ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRoadmapProjectsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  });

export const RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.RoadmapUpdateOneRequiredWithoutProjectsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoadmapCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    upsert: z.lazy(() => RoadmapUpsertWithoutProjectsInputSchema).optional(),
    connect: z.lazy(() => RoadmapWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
        z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
      ])
      .optional(),
  });

export const ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema)
      .optional(),
    upsert: z
      .lazy(() => ProjectUpsertWithoutRoadmapProjectsInputSchema)
      .optional(),
    connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(
          () => ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema,
        ),
        z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
      ])
      .optional(),
  });

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> =
  z.strictObject({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  });

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  });

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  });

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z.strictObject({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional(),
  });

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  });

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableFilterSchema),
      ])
      .optional()
      .nullable(),
  });

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  });

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  });

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
  });

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
  });

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => SessionCreateManyUserInputSchema),
      z.lazy(() => SessionCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  });

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  });

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => AccountCreateManyUserInputSchema),
      z.lazy(() => AccountCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const ProjectCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export const ProjectCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const ProjectCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectCreateManyUserInputSchema),
      z.lazy(() => ProjectCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const RoadmapCreateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    goals: z
      .lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export const RoadmapUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema,
      )
      .optional(),
  });

export const RoadmapCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const RoadmapCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RoadmapCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapCreateManyUserInputSchema),
      z.lazy(() => RoadmapCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => SessionUpdateManyMutationInputSchema),
      z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema),
    ]),
  });

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => SessionScalarWhereInputSchema),
        z.lazy(() => SessionScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionScalarWhereInputSchema),
        z.lazy(() => SessionScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    ipAddress: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userAgent: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  });

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => AccountUpdateManyMutationInputSchema),
      z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema),
    ]),
  });

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => AccountScalarWhereInputSchema),
        z.lazy(() => AccountScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountScalarWhereInputSchema),
        z.lazy(() => AccountScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accountId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    providerId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accessToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    refreshToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    idToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    scope: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  });

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

export const ProjectUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutUserInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export const ProjectUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => ProjectScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProjectUpdateManyMutationInputSchema),
      z.lazy(() => ProjectUncheckedUpdateManyWithoutUserInputSchema),
    ]),
  });

export const ProjectScalarWhereInputSchema: z.ZodType<Prisma.ProjectScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  });

export const RoadmapUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export const RoadmapUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutUserInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export const RoadmapUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpdateManyWithWhereWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateManyWithoutUserInputSchema),
    ]),
  });

export const RoadmapScalarWhereInputSchema: z.ZodType<Prisma.RoadmapScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  });

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSessionsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
    ]),
  });

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutSessionsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutSessionsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutSessionsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
    ]),
  });

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
    ]),
  });

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
    ]),
  });

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserCreateWithoutProjectsInputSchema: z.ZodType<Prisma.UserCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
    ]),
  });

export const RepositoryCreateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export const RepositoryUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export const RepositoryCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryCreateOrConnectWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export const RepositoryCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RepositoryCreateManyProjectInputSchema),
      z.lazy(() => RepositoryCreateManyProjectInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const ProjectDependencyCreateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependencyInput> =
  z.strictObject({
    dependent: z.lazy(() => ProjectCreateNestedOneWithoutDependentsInputSchema),
  });

export const ProjectDependencyUncheckedCreateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependencyInput> =
  z.strictObject({
    dependentId: z.string(),
  });

export const ProjectDependencyCreateOrConnectWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
      ),
    ]),
  });

export const ProjectDependencyCreateManyDependencyInputEnvelopeSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectDependencyCreateManyDependencyInputSchema),
      z.lazy(() => ProjectDependencyCreateManyDependencyInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const ProjectDependencyCreateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateWithoutDependentInput> =
  z.strictObject({
    dependency: z.lazy(
      () => ProjectCreateNestedOneWithoutDependenciesInputSchema,
    ),
  });

export const ProjectDependencyUncheckedCreateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateWithoutDependentInput> =
  z.strictObject({
    dependencyId: z.string(),
  });

export const ProjectDependencyCreateOrConnectWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateOrConnectWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputSchema),
    ]),
  });

export const ProjectDependencyCreateManyDependentInputEnvelopeSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProjectDependencyCreateManyDependentInputSchema),
      z.lazy(() => ProjectDependencyCreateManyDependentInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const RoadmapProjectCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputSchema),
  });

export const RoadmapProjectUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
  });

export const RoadmapProjectCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export const RoadmapProjectCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RoadmapProjectCreateManyProjectInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapProjectCreateManyProjectInputSchema),
      z.lazy(() => RoadmapProjectCreateManyProjectInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const UserUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpsertWithoutProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export const UserUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
    ]),
  });

export const UserUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpdateWithoutProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpsertWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RepositoryUpdateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export const RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpdateWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RepositoryUpdateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputSchema),
    ]),
  });

export const RepositoryUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpdateManyWithWhereWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RepositoryUpdateManyMutationInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateManyWithoutProjectInputSchema),
    ]),
  });

export const RepositoryScalarWhereInputSchema: z.ZodType<Prisma.RepositoryScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export const ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
      ),
    ]),
  });

export const ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependencyInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema,
      ),
    ]),
  });

export const ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependencyInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateManyMutationInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema,
      ),
    ]),
  });

export const ProjectDependencyScalarWhereInputSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export const ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpsertWithWhereUniqueWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedCreateWithoutDependentInputSchema),
    ]),
  });

export const ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithWhereUniqueWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateWithoutDependentInputSchema),
      z.lazy(() => ProjectDependencyUncheckedUpdateWithoutDependentInputSchema),
    ]),
  });

export const ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithWhereWithoutDependentInput> =
  z.strictObject({
    where: z.lazy(() => ProjectDependencyScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProjectDependencyUpdateManyMutationInputSchema),
      z.lazy(
        () => ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema,
      ),
    ]),
  });

export const RoadmapProjectUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export const RoadmapProjectUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutProjectInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutProjectInputSchema),
    ]),
  });

export const RoadmapProjectUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutProjectInputSchema),
    ]),
  });

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

export const ProjectCreateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRepositoriesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRepositoriesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export const ProjectCreateOrConnectWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRepositoriesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
    ]),
  });

export const ProjectUpsertWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRepositoriesInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const ProjectUpdateToOneWithWhereWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRepositoriesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutRepositoriesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRepositoriesInputSchema),
    ]),
  });

export const ProjectUpdateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutRepositoriesInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateWithoutRepositoriesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRepositoriesInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export const ProjectCreateWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutDependenciesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutDependenciesInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export const ProjectCreateOrConnectWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependenciesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
    ]),
  });

export const ProjectCreateWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectCreateWithoutDependentsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutProjectInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutDependentsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutProjectInputSchema,
      )
      .optional(),
  });

export const ProjectCreateOrConnectWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependentsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
    ]),
  });

export const ProjectUpsertWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependenciesInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependenciesInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const ProjectUpdateToOneWithWhereWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependenciesInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutDependenciesInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependenciesInputSchema),
    ]),
  });

export const ProjectUpdateWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutDependenciesInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    repositories: z
      .lazy(() => RepositoryUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateWithoutDependenciesInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutDependenciesInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export const ProjectUpsertWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDependentsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const ProjectUpdateToOneWithWhereWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDependentsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutDependentsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutDependentsInputSchema),
    ]),
  });

export const ProjectUpdateWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutDependentsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    repositories: z
      .lazy(() => RepositoryUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateWithoutDependentsInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutDependentsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export const UserCreateWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserCreateWithoutRoadmapsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserUncheckedCreateWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRoadmapsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export const UserCreateOrConnectWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoadmapsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
    ]),
  });

export const RoadmapGoalCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
  });

export const RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
  });

export const RoadmapGoalCreateOrConnectWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateOrConnectWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapGoalCreateManyRoadmapInputEnvelopeSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapGoalCreateManyRoadmapInputSchema),
      z.lazy(() => RoadmapGoalCreateManyRoadmapInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const RoadmapProjectCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    project: z.lazy(
      () => ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema,
    ),
  });

export const RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    projectId: z.string(),
  });

export const RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateOrConnectWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapProjectCreateManyRoadmapInputEnvelopeSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapProjectCreateManyRoadmapInputSchema),
      z.lazy(() => RoadmapProjectCreateManyRoadmapInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const UserUpsertWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUpsertWithoutRoadmapsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export const UserUpdateToOneWithWhereWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoadmapsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
    ]),
  });

export const UserUpdateWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUpdateWithoutRoadmapsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const UserUncheckedUpdateWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRoadmapsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  });

export const RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpsertWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapGoalCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapGoalUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapGoalUpdateManyWithWhereWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyWithWhereWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapGoalScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapGoalUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapGoalScalarWhereInputSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapGoalScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    isCompleted: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export const RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpsertWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithWhereUniqueWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateWithoutRoadmapInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapProjectUpdateManyWithWhereWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyWithWhereWithoutRoadmapInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapProjectScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => RoadmapProjectUpdateManyMutationInputSchema),
      z.lazy(() => RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema),
    ]),
  });

export const RoadmapCreateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutGoalsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputSchema),
    projects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export const RoadmapUncheckedCreateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutGoalsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema,
      )
      .optional(),
  });

export const RoadmapCreateOrConnectWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutGoalsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
    ]),
  });

export const RoadmapUpsertWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpsertWithoutGoalsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutGoalsInputSchema),
    ]),
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export const RoadmapUpdateToOneWithWhereWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutGoalsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutGoalsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutGoalsInputSchema),
    ]),
  });

export const RoadmapUpdateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUpdateWithoutGoalsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export const RoadmapUncheckedUpdateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutGoalsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema,
      )
      .optional(),
  });

export const RoadmapCreateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputSchema),
    goals: z
      .lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export const RoadmapUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export const RoadmapCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateOrConnectWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
    ]),
  });

export const ProjectCreateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRoadmapProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
    repositories: z
      .lazy(() => RepositoryCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependencyInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyCreateNestedManyWithoutDependentInputSchema)
      .optional(),
  });

export const ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutRoadmapProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    repositories: z
      .lazy(() => RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema,
      )
      .optional(),
  });

export const ProjectCreateOrConnectWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRoadmapProjectsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
    ]),
  });

export const RoadmapUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpsertWithoutProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RoadmapCreateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedCreateWithoutProjectsInputSchema),
    ]),
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export const RoadmapUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpdateToOneWithWhereWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => RoadmapWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => RoadmapUpdateWithoutProjectsInputSchema),
      z.lazy(() => RoadmapUncheckedUpdateWithoutProjectsInputSchema),
    ]),
  });

export const RoadmapUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUpdateWithoutProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema)
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export const RoadmapUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export const ProjectUpsertWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRoadmapProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutRoadmapProjectsInputSchema),
    ]),
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export const ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRoadmapProjectsInput> =
  z.strictObject({
    where: z.lazy(() => ProjectWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutRoadmapProjectsInputSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema),
    ]),
  });

export const ProjectUpdateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutRoadmapProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
    repositories: z
      .lazy(() => RepositoryUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateWithoutRoadmapProjectsInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutRoadmapProjectsInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
  });

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
  });

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  });

export const ProjectCreateManyUserInputSchema: z.ZodType<Prisma.ProjectCreateManyUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export const RoadmapCreateManyUserInputSchema: z.ZodType<Prisma.RoadmapCreateManyUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const ProjectUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependencyNestedInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyUpdateManyWithoutDependentNestedInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
  });

export const ProjectUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    repositories: z
      .lazy(() => RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema)
      .optional(),
    dependencies: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema,
      )
      .optional(),
    dependents: z
      .lazy(
        () =>
          ProjectDependencyUncheckedUpdateManyWithoutDependentNestedInputSchema,
      )
      .optional(),
    roadmapProjects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutProjectNestedInputSchema,
      )
      .optional(),
  });

export const ProjectUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const RoadmapUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
  });

export const RoadmapUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedUpdateManyWithoutRoadmapNestedInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedUpdateManyWithoutRoadmapNestedInputSchema,
      )
      .optional(),
  });

export const RoadmapUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedUpdateManyWithoutUserInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

export const RepositoryCreateManyProjectInputSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export const ProjectDependencyCreateManyDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInput> =
  z.strictObject({
    dependentId: z.string(),
  });

export const ProjectDependencyCreateManyDependentInputSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInput> =
  z.strictObject({
    dependencyId: z.string(),
  });

export const RoadmapProjectCreateManyProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateManyProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
  });

export const RepositoryUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpdateWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const RepositoryUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const RepositoryUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateManyWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const ProjectDependencyUpdateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependencyInput> =
  z.strictObject({
    dependent: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependentsNestedInputSchema)
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependencyInput> =
  z.strictObject({
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateManyWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyInput> =
  z.strictObject({
    dependentId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const ProjectDependencyUpdateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateWithoutDependentInput> =
  z.strictObject({
    dependency: z
      .lazy(() => ProjectUpdateOneRequiredWithoutDependenciesNestedInputSchema)
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependentInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const ProjectDependencyUncheckedUpdateManyWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentInput> =
  z.strictObject({
    dependencyId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmap: z
      .lazy(() => RoadmapUpdateOneRequiredWithoutProjectsNestedInputSchema)
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutProjectInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    roadmapId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalCreateManyRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
  });

export const RoadmapProjectCreateManyRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    projectId: z.string(),
  });

export const RoadmapGoalUpdateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUpdateWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalUncheckedUpdateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapGoalUncheckedUpdateManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedUpdateManyWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isCompleted: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectUpdateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUpdateWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    project: z
      .lazy(
        () => ProjectUpdateOneRequiredWithoutRoadmapProjectsNestedInputSchema,
      )
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

export const RoadmapProjectUncheckedUpdateManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedUpdateManyWithoutRoadmapInput> =
  z.strictObject({
    id: z
      .union([z.cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    order: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    projectId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  });

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z
      .union([
        SessionOrderByWithAggregationInputSchema.array(),
        SessionOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: SessionScalarFieldEnumSchema.array(),
    having: SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z
  .object({
    where: AccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputSchema.array(),
        AccountOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AccountScalarFieldEnumSchema.array(),
    having: AccountScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const VerificationFindFirstArgsSchema: z.ZodType<Prisma.VerificationFindFirstArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationFindManyArgsSchema: z.ZodType<Prisma.VerificationFindManyArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationGroupByArgsSchema: z.ZodType<Prisma.VerificationGroupByArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithAggregationInputSchema.array(),
          VerificationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: VerificationScalarFieldEnumSchema.array(),
      having: VerificationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationFindUniqueArgsSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const ProjectFindFirstArgsSchema: z.ZodType<Prisma.ProjectFindFirstArgs> =
  z
    .object({
      select: ProjectSelectSchema.optional(),
      include: ProjectIncludeSchema.optional(),
      where: ProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectOrderByWithRelationInputSchema.array(),
          ProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectScalarFieldEnumSchema,
          ProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> =
  z
    .object({
      select: ProjectSelectSchema.optional(),
      include: ProjectIncludeSchema.optional(),
      where: ProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectOrderByWithRelationInputSchema.array(),
          ProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectScalarFieldEnumSchema,
          ProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectFindManyArgsSchema: z.ZodType<Prisma.ProjectFindManyArgs> =
  z
    .object({
      select: ProjectSelectSchema.optional(),
      include: ProjectIncludeSchema.optional(),
      where: ProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectOrderByWithRelationInputSchema.array(),
          ProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectScalarFieldEnumSchema,
          ProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectAggregateArgsSchema: z.ZodType<Prisma.ProjectAggregateArgs> =
  z
    .object({
      where: ProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectOrderByWithRelationInputSchema.array(),
          ProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProjectGroupByArgsSchema: z.ZodType<Prisma.ProjectGroupByArgs> = z
  .object({
    where: ProjectWhereInputSchema.optional(),
    orderBy: z
      .union([
        ProjectOrderByWithAggregationInputSchema.array(),
        ProjectOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ProjectScalarFieldEnumSchema.array(),
    having: ProjectScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ProjectFindUniqueArgsSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> =
  z
    .object({
      select: ProjectSelectSchema.optional(),
      include: ProjectIncludeSchema.optional(),
      where: ProjectWhereUniqueInputSchema,
    })
    .strict();

export const ProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProjectSelectSchema.optional(),
      include: ProjectIncludeSchema.optional(),
      where: ProjectWhereUniqueInputSchema,
    })
    .strict();

export const RepositoryFindFirstArgsSchema: z.ZodType<Prisma.RepositoryFindFirstArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RepositoryScalarFieldEnumSchema,
          RepositoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RepositoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RepositoryFindFirstOrThrowArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RepositoryScalarFieldEnumSchema,
          RepositoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RepositoryFindManyArgsSchema: z.ZodType<Prisma.RepositoryFindManyArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RepositoryScalarFieldEnumSchema,
          RepositoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RepositoryAggregateArgsSchema: z.ZodType<Prisma.RepositoryAggregateArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RepositoryGroupByArgsSchema: z.ZodType<Prisma.RepositoryGroupByArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithAggregationInputSchema.array(),
          RepositoryOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RepositoryScalarFieldEnumSchema.array(),
      having: RepositoryScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RepositoryFindUniqueArgsSchema: z.ZodType<Prisma.RepositoryFindUniqueArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereUniqueInputSchema,
    })
    .strict();

export const RepositoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RepositoryFindUniqueOrThrowArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereUniqueInputSchema,
    })
    .strict();

export const ProjectDependencyFindFirstArgsSchema: z.ZodType<Prisma.ProjectDependencyFindFirstArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithRelationInputSchema.array(),
          ProjectDependencyOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectDependencyWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectDependencyScalarFieldEnumSchema,
          ProjectDependencyScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectDependencyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectDependencyFindFirstOrThrowArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithRelationInputSchema.array(),
          ProjectDependencyOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectDependencyWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectDependencyScalarFieldEnumSchema,
          ProjectDependencyScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectDependencyFindManyArgsSchema: z.ZodType<Prisma.ProjectDependencyFindManyArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithRelationInputSchema.array(),
          ProjectDependencyOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectDependencyWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectDependencyScalarFieldEnumSchema,
          ProjectDependencyScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectDependencyAggregateArgsSchema: z.ZodType<Prisma.ProjectDependencyAggregateArgs> =
  z
    .object({
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithRelationInputSchema.array(),
          ProjectDependencyOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectDependencyWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProjectDependencyGroupByArgsSchema: z.ZodType<Prisma.ProjectDependencyGroupByArgs> =
  z
    .object({
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithAggregationInputSchema.array(),
          ProjectDependencyOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ProjectDependencyScalarFieldEnumSchema.array(),
      having: ProjectDependencyScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProjectDependencyFindUniqueArgsSchema: z.ZodType<Prisma.ProjectDependencyFindUniqueArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
    })
    .strict();

export const ProjectDependencyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectDependencyFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapFindFirstArgsSchema: z.ZodType<Prisma.RoadmapFindFirstArgs> =
  z
    .object({
      select: RoadmapSelectSchema.optional(),
      include: RoadmapIncludeSchema.optional(),
      where: RoadmapWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapOrderByWithRelationInputSchema.array(),
          RoadmapOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapScalarFieldEnumSchema,
          RoadmapScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoadmapFindFirstOrThrowArgs> =
  z
    .object({
      select: RoadmapSelectSchema.optional(),
      include: RoadmapIncludeSchema.optional(),
      where: RoadmapWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapOrderByWithRelationInputSchema.array(),
          RoadmapOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapScalarFieldEnumSchema,
          RoadmapScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapFindManyArgsSchema: z.ZodType<Prisma.RoadmapFindManyArgs> =
  z
    .object({
      select: RoadmapSelectSchema.optional(),
      include: RoadmapIncludeSchema.optional(),
      where: RoadmapWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapOrderByWithRelationInputSchema.array(),
          RoadmapOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapScalarFieldEnumSchema,
          RoadmapScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapAggregateArgsSchema: z.ZodType<Prisma.RoadmapAggregateArgs> =
  z
    .object({
      where: RoadmapWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapOrderByWithRelationInputSchema.array(),
          RoadmapOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RoadmapGroupByArgsSchema: z.ZodType<Prisma.RoadmapGroupByArgs> = z
  .object({
    where: RoadmapWhereInputSchema.optional(),
    orderBy: z
      .union([
        RoadmapOrderByWithAggregationInputSchema.array(),
        RoadmapOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: RoadmapScalarFieldEnumSchema.array(),
    having: RoadmapScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const RoadmapFindUniqueArgsSchema: z.ZodType<Prisma.RoadmapFindUniqueArgs> =
  z
    .object({
      select: RoadmapSelectSchema.optional(),
      include: RoadmapIncludeSchema.optional(),
      where: RoadmapWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoadmapFindUniqueOrThrowArgs> =
  z
    .object({
      select: RoadmapSelectSchema.optional(),
      include: RoadmapIncludeSchema.optional(),
      where: RoadmapWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapGoalFindFirstArgsSchema: z.ZodType<Prisma.RoadmapGoalFindFirstArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapGoalScalarFieldEnumSchema,
          RoadmapGoalScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapGoalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoadmapGoalFindFirstOrThrowArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapGoalScalarFieldEnumSchema,
          RoadmapGoalScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapGoalFindManyArgsSchema: z.ZodType<Prisma.RoadmapGoalFindManyArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapGoalScalarFieldEnumSchema,
          RoadmapGoalScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapGoalAggregateArgsSchema: z.ZodType<Prisma.RoadmapGoalAggregateArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RoadmapGoalGroupByArgsSchema: z.ZodType<Prisma.RoadmapGoalGroupByArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithAggregationInputSchema.array(),
          RoadmapGoalOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RoadmapGoalScalarFieldEnumSchema.array(),
      having: RoadmapGoalScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RoadmapGoalFindUniqueArgsSchema: z.ZodType<Prisma.RoadmapGoalFindUniqueArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapGoalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoadmapGoalFindUniqueOrThrowArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapProjectFindFirstArgsSchema: z.ZodType<Prisma.RoadmapProjectFindFirstArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithRelationInputSchema.array(),
          RoadmapProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapProjectScalarFieldEnumSchema,
          RoadmapProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoadmapProjectFindFirstOrThrowArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithRelationInputSchema.array(),
          RoadmapProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapProjectScalarFieldEnumSchema,
          RoadmapProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapProjectFindManyArgsSchema: z.ZodType<Prisma.RoadmapProjectFindManyArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithRelationInputSchema.array(),
          RoadmapProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapProjectScalarFieldEnumSchema,
          RoadmapProjectScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const RoadmapProjectAggregateArgsSchema: z.ZodType<Prisma.RoadmapProjectAggregateArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithRelationInputSchema.array(),
          RoadmapProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RoadmapProjectGroupByArgsSchema: z.ZodType<Prisma.RoadmapProjectGroupByArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithAggregationInputSchema.array(),
          RoadmapProjectOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RoadmapProjectScalarFieldEnumSchema.array(),
      having: RoadmapProjectScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const RoadmapProjectFindUniqueArgsSchema: z.ZodType<Prisma.RoadmapProjectFindUniqueArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoadmapProjectFindUniqueOrThrowArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereUniqueInputSchema,
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserCreateManyInputSchema,
        UserCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserUpdateManyMutationInputSchema,
        UserUncheckedUpdateManyInputSchema,
      ]),
      where: UserWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
    create: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
    update: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SessionUpdateManyMutationInputSchema,
        SessionUncheckedUpdateManyInputSchema,
      ]),
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const SessionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SessionUpdateManyMutationInputSchema,
        SessionUncheckedUpdateManyInputSchema,
      ]),
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
    create: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
    update: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const AccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      data: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
      create: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        VerificationUpdateInputSchema,
        VerificationUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const VerificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const VerificationDeleteArgsSchema: z.ZodType<Prisma.VerificationDeleteArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationUpdateArgsSchema: z.ZodType<Prisma.VerificationUpdateArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      data: z.union([
        VerificationUpdateInputSchema,
        VerificationUncheckedUpdateInputSchema,
      ]),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationUpdateManyArgsSchema: z.ZodType<Prisma.VerificationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationUpdateManyMutationInputSchema,
        VerificationUncheckedUpdateManyInputSchema,
      ]),
      where: VerificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const VerificationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        VerificationUpdateManyMutationInputSchema,
        VerificationUncheckedUpdateManyInputSchema,
      ]),
      where: VerificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectCreateArgsSchema: z.ZodType<Prisma.ProjectCreateArgs> = z
  .object({
    select: ProjectSelectSchema.optional(),
    include: ProjectIncludeSchema.optional(),
    data: z.union([
      ProjectCreateInputSchema,
      ProjectUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z
  .object({
    select: ProjectSelectSchema.optional(),
    include: ProjectIncludeSchema.optional(),
    where: ProjectWhereUniqueInputSchema,
    create: z.union([
      ProjectCreateInputSchema,
      ProjectUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProjectUpdateInputSchema,
      ProjectUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ProjectCreateManyArgsSchema: z.ZodType<Prisma.ProjectCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectCreateManyInputSchema,
        ProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectCreateManyInputSchema,
        ProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectDeleteArgsSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z
  .object({
    select: ProjectSelectSchema.optional(),
    include: ProjectIncludeSchema.optional(),
    where: ProjectWhereUniqueInputSchema,
  })
  .strict();

export const ProjectUpdateArgsSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z
  .object({
    select: ProjectSelectSchema.optional(),
    include: ProjectIncludeSchema.optional(),
    data: z.union([
      ProjectUpdateInputSchema,
      ProjectUncheckedUpdateInputSchema,
    ]),
    where: ProjectWhereUniqueInputSchema,
  })
  .strict();

export const ProjectUpdateManyArgsSchema: z.ZodType<Prisma.ProjectUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectUpdateManyMutationInputSchema,
        ProjectUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectUpdateManyMutationInputSchema,
        ProjectUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDeleteManyArgs> =
  z
    .object({
      where: ProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RepositoryCreateArgsSchema: z.ZodType<Prisma.RepositoryCreateArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      data: z.union([
        RepositoryCreateInputSchema,
        RepositoryUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const RepositoryUpsertArgsSchema: z.ZodType<Prisma.RepositoryUpsertArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereUniqueInputSchema,
      create: z.union([
        RepositoryCreateInputSchema,
        RepositoryUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RepositoryUpdateInputSchema,
        RepositoryUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const RepositoryCreateManyArgsSchema: z.ZodType<Prisma.RepositoryCreateManyArgs> =
  z
    .object({
      data: z.union([
        RepositoryCreateManyInputSchema,
        RepositoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RepositoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RepositoryCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RepositoryCreateManyInputSchema,
        RepositoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RepositoryDeleteArgsSchema: z.ZodType<Prisma.RepositoryDeleteArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      where: RepositoryWhereUniqueInputSchema,
    })
    .strict();

export const RepositoryUpdateArgsSchema: z.ZodType<Prisma.RepositoryUpdateArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: RepositoryIncludeSchema.optional(),
      data: z.union([
        RepositoryUpdateInputSchema,
        RepositoryUncheckedUpdateInputSchema,
      ]),
      where: RepositoryWhereUniqueInputSchema,
    })
    .strict();

export const RepositoryUpdateManyArgsSchema: z.ZodType<Prisma.RepositoryUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RepositoryUpdateManyMutationInputSchema,
        RepositoryUncheckedUpdateManyInputSchema,
      ]),
      where: RepositoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RepositoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RepositoryUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RepositoryUpdateManyMutationInputSchema,
        RepositoryUncheckedUpdateManyInputSchema,
      ]),
      where: RepositoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RepositoryDeleteManyArgsSchema: z.ZodType<Prisma.RepositoryDeleteManyArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectDependencyCreateArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      data: z.union([
        ProjectDependencyCreateInputSchema,
        ProjectDependencyUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ProjectDependencyUpsertArgsSchema: z.ZodType<Prisma.ProjectDependencyUpsertArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
      create: z.union([
        ProjectDependencyCreateInputSchema,
        ProjectDependencyUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ProjectDependencyUpdateInputSchema,
        ProjectDependencyUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ProjectDependencyCreateManyArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyCreateManyInputSchema,
        ProjectDependencyCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectDependencyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyCreateManyInputSchema,
        ProjectDependencyCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectDependencyDeleteArgsSchema: z.ZodType<Prisma.ProjectDependencyDeleteArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
    })
    .strict();

export const ProjectDependencyUpdateArgsSchema: z.ZodType<Prisma.ProjectDependencyUpdateArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: ProjectDependencyIncludeSchema.optional(),
      data: z.union([
        ProjectDependencyUpdateInputSchema,
        ProjectDependencyUncheckedUpdateInputSchema,
      ]),
      where: ProjectDependencyWhereUniqueInputSchema,
    })
    .strict();

export const ProjectDependencyUpdateManyArgsSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyUpdateManyMutationInputSchema,
        ProjectDependencyUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectDependencyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectDependencyUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProjectDependencyUpdateManyMutationInputSchema,
        ProjectDependencyUncheckedUpdateManyInputSchema,
      ]),
      where: ProjectDependencyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProjectDependencyDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDependencyDeleteManyArgs> =
  z
    .object({
      where: ProjectDependencyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapCreateArgsSchema: z.ZodType<Prisma.RoadmapCreateArgs> = z
  .object({
    select: RoadmapSelectSchema.optional(),
    include: RoadmapIncludeSchema.optional(),
    data: z.union([
      RoadmapCreateInputSchema,
      RoadmapUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const RoadmapUpsertArgsSchema: z.ZodType<Prisma.RoadmapUpsertArgs> = z
  .object({
    select: RoadmapSelectSchema.optional(),
    include: RoadmapIncludeSchema.optional(),
    where: RoadmapWhereUniqueInputSchema,
    create: z.union([
      RoadmapCreateInputSchema,
      RoadmapUncheckedCreateInputSchema,
    ]),
    update: z.union([
      RoadmapUpdateInputSchema,
      RoadmapUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const RoadmapCreateManyArgsSchema: z.ZodType<Prisma.RoadmapCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapCreateManyInputSchema,
        RoadmapCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapCreateManyInputSchema,
        RoadmapCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapDeleteArgsSchema: z.ZodType<Prisma.RoadmapDeleteArgs> = z
  .object({
    select: RoadmapSelectSchema.optional(),
    include: RoadmapIncludeSchema.optional(),
    where: RoadmapWhereUniqueInputSchema,
  })
  .strict();

export const RoadmapUpdateArgsSchema: z.ZodType<Prisma.RoadmapUpdateArgs> = z
  .object({
    select: RoadmapSelectSchema.optional(),
    include: RoadmapIncludeSchema.optional(),
    data: z.union([
      RoadmapUpdateInputSchema,
      RoadmapUncheckedUpdateInputSchema,
    ]),
    where: RoadmapWhereUniqueInputSchema,
  })
  .strict();

export const RoadmapUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapUpdateManyMutationInputSchema,
        RoadmapUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapUpdateManyMutationInputSchema,
        RoadmapUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapDeleteManyArgs> =
  z
    .object({
      where: RoadmapWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapGoalCreateArgsSchema: z.ZodType<Prisma.RoadmapGoalCreateArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      data: z.union([
        RoadmapGoalCreateInputSchema,
        RoadmapGoalUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const RoadmapGoalUpsertArgsSchema: z.ZodType<Prisma.RoadmapGoalUpsertArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
      create: z.union([
        RoadmapGoalCreateInputSchema,
        RoadmapGoalUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RoadmapGoalUpdateInputSchema,
        RoadmapGoalUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const RoadmapGoalCreateManyArgsSchema: z.ZodType<Prisma.RoadmapGoalCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalCreateManyInputSchema,
        RoadmapGoalCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapGoalCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapGoalCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalCreateManyInputSchema,
        RoadmapGoalCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapGoalDeleteArgsSchema: z.ZodType<Prisma.RoadmapGoalDeleteArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapGoalUpdateArgsSchema: z.ZodType<Prisma.RoadmapGoalUpdateArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: RoadmapGoalIncludeSchema.optional(),
      data: z.union([
        RoadmapGoalUpdateInputSchema,
        RoadmapGoalUncheckedUpdateInputSchema,
      ]),
      where: RoadmapGoalWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapGoalUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalUpdateManyMutationInputSchema,
        RoadmapGoalUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapGoalWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapGoalUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalUpdateManyMutationInputSchema,
        RoadmapGoalUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapGoalWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapGoalDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapGoalDeleteManyArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapProjectCreateArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      data: z.union([
        RoadmapProjectCreateInputSchema,
        RoadmapProjectUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const RoadmapProjectUpsertArgsSchema: z.ZodType<Prisma.RoadmapProjectUpsertArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereUniqueInputSchema,
      create: z.union([
        RoadmapProjectCreateInputSchema,
        RoadmapProjectUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RoadmapProjectUpdateInputSchema,
        RoadmapProjectUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const RoadmapProjectCreateManyArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectCreateManyInputSchema,
        RoadmapProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectCreateManyInputSchema,
        RoadmapProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RoadmapProjectDeleteArgsSchema: z.ZodType<Prisma.RoadmapProjectDeleteArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      where: RoadmapProjectWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapProjectUpdateArgsSchema: z.ZodType<Prisma.RoadmapProjectUpdateArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: RoadmapProjectIncludeSchema.optional(),
      data: z.union([
        RoadmapProjectUpdateInputSchema,
        RoadmapProjectUncheckedUpdateInputSchema,
      ]),
      where: RoadmapProjectWhereUniqueInputSchema,
    })
    .strict();

export const RoadmapProjectUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectUpdateManyMutationInputSchema,
        RoadmapProjectUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapProjectUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectUpdateManyMutationInputSchema,
        RoadmapProjectUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const RoadmapProjectDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapProjectDeleteManyArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();
