"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth/session";
import prisma from "@/lib/db/prisma";

type CreateProjectInput = {
  title: string;
  description?: string;
  published: boolean;
  repositories: {
    url: string;
    name: string;
  }[];
  dependencyIds?: string[];
};

export async function getMyProjects() {
  const session = await getSession();

  if (!session) {
    return [];
  }

  return prisma.project.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function createProject(input: CreateProjectInput) {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const project = await prisma.project.create({
    data: {
      title: input.title,
      description: input.description,
      published: input.published,
      userId: session.user.id,
      repositories: {
        create: input.repositories.map((repo) => ({
          url: repo.url,
          name: repo.name,
        })),
      },
      dependents: {
        create: input.dependencyIds?.map((id) => ({
          dependencyId: id,
        })),
      },
    },
  });

  revalidatePath("/admin");
  revalidatePath("/");
  return project;
}

export async function updateProject(
  projectId: string,
  input: CreateProjectInput,
) {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  // プロジェクトが本人のものか確認
  const existingProject = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!existingProject || existingProject.userId !== session.user.id) {
    throw new Error("Unauthorized");
  }

  // 既存のリポジトリを削除して新しいものを追加
  const project = await prisma.project.update({
    where: { id: projectId },
    data: {
      title: input.title,
      description: input.description,
      published: input.published,
      repositories: {
        deleteMany: {}, // 既存を削除
        create: input.repositories.map((repo) => ({
          url: repo.url,
          name: repo.name,
        })),
      },
      dependents: {
        deleteMany: {}, // 既存の依存関係を削除
        create: input.dependencyIds?.map((id) => ({
          dependencyId: id,
        })),
      },
    },
  });

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath(`/admin/projects/${projectId}`);
  return project;
}
