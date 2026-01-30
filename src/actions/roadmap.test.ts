import { beforeEach, describe, expect, it, vi } from "vitest";
import prisma from "@/lib/prisma";
import * as sessionLib from "@/lib/session";
import {
  addProjectToRoadmap,
  addRoadmapGoal,
  createRoadmap,
  deleteRoadmap,
  getMyRoadmaps,
  getRoadmap,
  removeProjectFromRoadmap,
  toggleRoadmapGoal,
  updateRoadmap,
} from "./roadmap";

// Mock dependencies
vi.mock("@/lib/prisma", () => ({
  default: {
    roadmap: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    roadmapGoal: {
      create: vi.fn(),
      update: vi.fn(),
      findFirst: vi.fn(),
    },
    roadmapProject: {
      create: vi.fn(),
      delete: vi.fn(),
      findFirst: vi.fn(),
    },
    $transaction: vi.fn((callback) => callback(prisma)),
  },
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

const mockUserId = "user-123";
vi.mock("@/lib/session", () => ({
  getSession: vi.fn(),
}));

describe("Roadmap Actions", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
    (sessionLib.getSession as any).mockResolvedValue({
      user: { id: mockUserId },
    });
  });

  describe("createRoadmap", () => {
    it("should create a basic roadmap", async () => {
      const input = {
        title: "My Roadmap",
        description: "A cool plan",
      };

      const mockCreated = { id: "rm-1", ...input, userId: mockUserId };
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.create as any).mockResolvedValue(mockCreated);

      const result = await createRoadmap(input);

      expect(prisma.roadmap.create).toHaveBeenCalledWith({
        data: {
          title: input.title,
          description: input.description,
          userId: mockUserId,
        },
      });
      expect(result).toEqual(mockCreated);
    });
  });

  describe("getMyRoadmaps", () => {
    it("should return user roadmaps", async () => {
      const mockRoadmaps = [{ id: "rm-1", title: "Map 1", userId: mockUserId }];
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.findMany as any).mockResolvedValue(mockRoadmaps);

      const result = await getMyRoadmaps();

      expect(prisma.roadmap.findMany).toHaveBeenCalledWith({
        where: { userId: mockUserId },
        orderBy: { updatedAt: "desc" },
        include: {
          projects: { include: { project: true } },
          goals: true,
        },
      });
      expect(result).toEqual(mockRoadmaps);
    });
  });

  describe("getRoadmap", () => {
    it("should return a single roadmap", async () => {
      const mockRoadmap = { id: "rm-1", title: "Map 1", userId: mockUserId };
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.findUnique as any).mockResolvedValue(mockRoadmap);

      const result = await getRoadmap("rm-1");

      expect(prisma.roadmap.findUnique).toHaveBeenCalledWith({
        where: { id: "rm-1", userId: mockUserId },
        include: {
          projects: { include: { project: true } },
          goals: { orderBy: { order: "asc" } },
        },
      });
      expect(result).toEqual(mockRoadmap);
    });
  });

  describe("updateRoadmap", () => {
    it("should update roadmap details", async () => {
      const updateData = { title: "Updated Title" };
      const mockUpdated = { id: "rm-1", ...updateData };
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.update as any).mockResolvedValue(mockUpdated);

      const result = await updateRoadmap("rm-1", updateData);

      expect(prisma.roadmap.update).toHaveBeenCalledWith({
        where: { id: "rm-1", userId: mockUserId },
        data: updateData,
        include: {
          projects: { include: { project: true } },
          goals: true,
        },
      });
      expect(result).toEqual(mockUpdated);
    });
  });

  describe("deleteRoadmap", () => {
    it("should delete a roadmap", async () => {
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.delete as any).mockResolvedValue({ id: "rm-1" });

      await deleteRoadmap("rm-1");

      expect(prisma.roadmap.delete).toHaveBeenCalledWith({
        where: { id: "rm-1", userId: mockUserId },
      });
    });
  });

  describe("Roadmap Items", () => {
    it("should add a goal", async () => {
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.findUnique as any).mockResolvedValue({
        id: "rm-1",
        userId: mockUserId,
      });
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapGoal.findFirst as any).mockResolvedValue(null); // No existing goals
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapGoal.create as any).mockResolvedValue({ id: "g-1" });

      await addRoadmapGoal("rm-1", "New Goal");
      expect(prisma.roadmapGoal.create).toHaveBeenCalledWith({
        data: {
          content: "New Goal",
          roadmapId: "rm-1",
          order: 0,
        },
      });
    });

    it("should toggle a goal", async () => {
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapGoal.findFirst as any).mockResolvedValue({
        id: "goal-1",
        roadmapId: "rm-1",
      });
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapGoal.update as any).mockResolvedValue({
        id: "goal-1",
        isCompleted: true,
      });

      await toggleRoadmapGoal("goal-1", true);
      expect(prisma.roadmapGoal.update).toHaveBeenCalledWith({
        where: { id: "goal-1" },
        data: { isCompleted: true },
      });
    });

    it("should add a project to roadmap", async () => {
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.findUnique as any).mockResolvedValue({
        id: "rm-1",
        userId: mockUserId,
      });
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapProject.findFirst as any).mockResolvedValue(null);
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmapProject.create as any).mockResolvedValue({ id: "rmp-1" });

      await addProjectToRoadmap("rm-1", "proj-1");
      expect(prisma.roadmapProject.create).toHaveBeenCalledWith({
        data: {
          roadmapId: "rm-1",
          projectId: "proj-1",
          order: 0,
        },
      });
    });
    it("should remove a project from roadmap", async () => {
      // biome-ignore lint/suspicious/noExplicitAny: Mocking needs any
      (prisma.roadmap.findUnique as any).mockResolvedValue({
        id: "rm-1",
        userId: mockUserId,
      });

      await removeProjectFromRoadmap("rm-1", "proj-1");
      expect(prisma.roadmapProject.delete).toHaveBeenCalledWith({
        where: {
          roadmapId_projectId: {
            roadmapId: "rm-1",
            projectId: "proj-1",
          },
        },
      });
    });
  });
});
