import { beforeEach, describe, expect, it, vi } from "vitest";

const { getProjectsMock } = vi.hoisted(() => {
  return { getProjectsMock: vi.fn() };
});

vi.mock("@vercel/sdk", () => {
  return {
    Vercel: class {
      constructor() {
        // @ts-expect-error
        // biome-ignore lint/correctness/noConstructorReturn: mocking sdk for tests
        return {
          projects: {
            getProjects: getProjectsMock,
          },
        };
      }
    },
  };
});

import { getProjectByRepo } from "./vercel";

describe("getProjectByRepo", () => {
  beforeEach(() => {
    getProjectsMock.mockReset();
  });

  it("should return project when found", async () => {
    const mockProject = {
      id: "prj_123",
      name: "test-project",
      framework: "nextjs",
    };

    getProjectsMock.mockResolvedValue({
      projects: [mockProject],
      pagination: { count: 1 },
    });

    const result = await getProjectByRepo("https://github.com/user/repo");
    expect(result).toEqual(mockProject);
    expect(getProjectsMock).toHaveBeenCalledWith({
      repoUrl: "https://github.com/user/repo",
      limit: "1",
    });
  });

  it("should return null when not found", async () => {
    getProjectsMock.mockResolvedValue({
      projects: [],
      pagination: { count: 0 },
    });

    const result = await getProjectByRepo("https://github.com/user/repo");
    expect(result).toBeNull();
  });
});
