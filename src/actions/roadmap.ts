"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth/session";
import prisma from "@/lib/db/prisma";

export async function createRoadmap(data: {
  title: string;
  description?: string;
}) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const roadmap = await prisma.roadmap.create({
    data: {
      title: data.title,
      description: data.description,
      userId: session.user.id,
    },
  });

  revalidatePath("/roadmap");
  return roadmap;
}

export async function getMyRoadmaps() {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return await prisma.roadmap.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    include: {
      projects: {
        include: {
          project: true,
        },
      },
      goals: true,
    },
  });
}

export async function getPublicRoadmaps() {
  return await prisma.roadmap.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      projects: {
        include: {
          project: true,
        },
      },
      goals: true,
    },
  });
}

export async function getRoadmap(id: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return await prisma.roadmap.findUnique({
    where: { id, userId: session.user.id },
    include: {
      projects: {
        include: {
          project: true,
        },
      },
      goals: {
        orderBy: { order: "asc" },
      },
    },
  });
}

// biome-ignore lint/suspicious/noExplicitAny: Allow any for partial updates for now
export async function updateRoadmap(id: string, data: any) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // TODO: Add proper type validation for data
  const roadmap = await prisma.roadmap.update({
    where: { id, userId: session.user.id },
    data: {
      title: data.title,
      description: data.description,
      // complex updates (projects/goals) handled separately or via nested writes
    },
    include: {
      projects: { include: { project: true } },
      goals: true,
    },
  });

  revalidatePath("/roadmap");
  revalidatePath(`/roadmap/${id}`);
  return roadmap;
}

export async function deleteRoadmap(id: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  await prisma.roadmap.delete({
    where: { id, userId: session.user.id },
  });

  revalidatePath("/roadmap");
}

export async function addRoadmapGoal(roadmapId: string, content: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Verify ownership
  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId, userId: session.user.id },
  });
  if (!roadmap) {
    throw new Error("Roadmap not found");
  }

  // Get max order
  const lastGoal = await prisma.roadmapGoal.findFirst({
    where: { roadmapId },
    orderBy: { order: "desc" },
  });
  const order = (lastGoal?.order ?? -1) + 1;

  const goal = await prisma.roadmapGoal.create({
    data: {
      content,
      roadmapId,
      order,
    },
  });

  revalidatePath(`/roadmap/${roadmapId}`);
  return goal;
}

export async function toggleRoadmapGoal(goalId: string, isCompleted: boolean) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Verify ownership via nested relation
  const goal = await prisma.roadmapGoal.findFirst({
    where: {
      id: goalId,
      roadmap: { userId: session.user.id },
    },
  });
  if (!goal) {
    throw new Error("Goal not found");
  }

  const updated = await prisma.roadmapGoal.update({
    where: { id: goalId },
    data: { isCompleted },
  });

  revalidatePath(`/roadmap/${goal.roadmapId}`);
  return updated;
}

export async function addProjectToRoadmap(
  roadmapId: string,
  projectId: string,
) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId, userId: session.user.id },
  });
  if (!roadmap) {
    throw new Error("Roadmap not found");
  }

  // Get max order
  const lastProject = await prisma.roadmapProject.findFirst({
    where: { roadmapId },
    orderBy: { order: "desc" },
  });
  const order = (lastProject?.order ?? -1) + 1;

  const roadmapProject = await prisma.roadmapProject.create({
    data: {
      roadmapId,
      projectId,
      order,
    },
  });

  revalidatePath(`/roadmap/${roadmapId}`);
  return roadmapProject;
}

export async function removeProjectFromRoadmap(
  roadmapId: string,
  projectId: string,
) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId, userId: session.user.id },
  });
  if (!roadmap) {
    throw new Error("Roadmap not found");
  }

  await prisma.roadmapProject.delete({
    where: {
      roadmapId_projectId: {
        roadmapId,
        projectId,
      },
    },
  });

  revalidatePath(`/roadmap/${roadmapId}`);
}

export async function reorderRoadmapProjects(
  roadmapId: string,
  projectIds: string[],
) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId, userId: session.user.id },
  });
  if (!roadmap) {
    throw new Error("Roadmap not found");
  }

  await prisma.$transaction(
    projectIds.map((projectId, index) =>
      prisma.roadmapProject.update({
        where: {
          roadmapId_projectId: {
            roadmapId,
            projectId,
          },
        },
        data: { order: index },
      }),
    ),
  );

  revalidatePath(`/roadmap/${roadmapId}`);
}

export async function reorderRoadmapGoals(
  roadmapId: string,
  goalIds: string[],
) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId, userId: session.user.id },
  });
  if (!roadmap) {
    throw new Error("Roadmap not found");
  }

  await prisma.$transaction(
    goalIds.map((goalId, index) =>
      prisma.roadmapGoal.update({
        where: { id: goalId },
        data: { order: index },
      }),
    ),
  );

  revalidatePath(`/roadmap/${roadmapId}`);
}

export async function updateRoadmapGoal(goalId: string, content: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const goal = await prisma.roadmapGoal.findFirst({
    where: {
      id: goalId,
      roadmap: { userId: session.user.id },
    },
  });
  if (!goal) {
    throw new Error("Goal not found");
  }

  const updated = await prisma.roadmapGoal.update({
    where: { id: goalId },
    data: { content },
  });

  revalidatePath(`/roadmap/${goal.roadmapId}`);
  return updated;
}

export async function deleteRoadmapGoal(goalId: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const goal = await prisma.roadmapGoal.findFirst({
    where: {
      id: goalId,
      roadmap: { userId: session.user.id },
    },
  });
  if (!goal) {
    throw new Error("Goal not found");
  }

  await prisma.roadmapGoal.delete({
    where: { id: goalId },
  });

  revalidatePath(`/roadmap/${goal.roadmapId}`);
}
