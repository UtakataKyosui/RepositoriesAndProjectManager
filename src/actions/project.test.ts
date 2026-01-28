import { beforeEach, describe, expect, it, vi } from "vitest";
import prisma from "@/lib/prisma";
import * as sessionLib from "@/lib/session";
import { createProject, getMyProjects, updateProject } from "./project";

// Mock dependencies
vi.mock("@/lib/prisma", () => ({
  default: {
    project: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

// Mock getSession to return a valid session
const mockUserId = "user-123";
vi.mock("@/lib/session", () => ({
  getSession: vi.fn(),
}));

describe("Project Actions", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (sessionLib.getSession as any).mockResolvedValue({
      user: { id: mockUserId },
    });
  });

  describe("getMyProjects", () => {
    it("should return projects belonging to the current user", async () => {
      const mockProjects = [
        { id: "p1", title: "Project 1", userId: mockUserId },
        { id: "p2", title: "Project 2", userId: mockUserId },
      ];
      (prisma.project.findMany as any).mockResolvedValue(mockProjects);

      const result = await getMyProjects();

      expect(prisma.project.findMany).toHaveBeenCalledWith({
        where: { userId: mockUserId },
        orderBy: { updatedAt: "desc" },
      });
      expect(result).toEqual(mockProjects);
    });
  });

  describe("createProject", () => {
    it("should create a project with dependencies", async () => {
      const input = {
        title: "New Project",
        description: "Desc",
        published: true,
        repositories: [],
        dependencyIds: ["dep-1", "dep-2"],
      };

      const mockCreatedProject = { id: "new-p", ...input };
      (prisma.project.create as any).mockResolvedValue(mockCreatedProject);

      await createProject(input);

      expect(prisma.project.create).toHaveBeenCalledWith({
        data: {
          title: input.title,
          description: input.description,
          published: input.published,
          userId: mockUserId,
          repositories: { create: [] },
          dependents: {
            create: [{ dependencyId: "dep-1" }, { dependencyId: "dep-2" }],
          },
        },
      });
    });
  });

  // updateProject test will be added later
});
