import type { Project, ProjectDependency, Repository } from "@prisma/client";

export type ProjectWithRepositories = Project & {
  repositories: Repository[];
};

export type ProjectDependencyWithDependent = ProjectDependency & {
  dependent: Project;
};

export type ProjectDependencyWithDependency = ProjectDependency & {
  dependency: Project;
};

export type ProjectWithRelations = ProjectWithRepositories & {
  dependencies: ProjectDependencyWithDependent[];
  dependents: ProjectDependencyWithDependency[];
};
