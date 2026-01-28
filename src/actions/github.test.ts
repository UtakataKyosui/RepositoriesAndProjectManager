import { beforeEach, describe, expect, it, vi } from "vitest";
import { getRepositoryCommits } from "./github";

// Mock prisma
const mockPrismaAccountFindFirst = vi.fn();
vi.mock("@/lib/prisma", () => ({
  default: {
    account: {
      findFirst: () => mockPrismaAccountFindFirst(),
    },
  },
}));

// Mock getSession
const mockGetSession = vi.fn();
vi.mock("@/lib/session", () => ({
  getSession: () => mockGetSession(),
}));

// Mock fetch
global.fetch = vi.fn();

describe("getRepositoryCommits", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch commits successfully for valid repository URL", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    const mockCommits = [
      {
        sha: "abc123",
        commit: {
          message: "feat: add new feature",
          author: {
            name: "John Doe",
            email: "john@example.com",
            date: "2026-01-28T01:00:00Z",
          },
        },
        html_url: "https://github.com/owner/repo/commit/abc123",
        author: {
          avatar_url: "https://avatars.githubusercontent.com/u/123",
          login: "johndoe",
        },
      },
      {
        sha: "def456",
        commit: {
          message: "fix: bug fix",
          author: {
            name: "Jane Smith",
            email: "jane@example.com",
            date: "2026-01-27T12:00:00Z",
          },
        },
        html_url: "https://github.com/owner/repo/commit/def456",
        author: {
          avatar_url: "https://avatars.githubusercontent.com/u/456",
          login: "janesmith",
        },
      },
    ];

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => mockCommits,
    });

    // Act
    const result = await getRepositoryCommits("https://github.com/owner/repo");

    // Assert
    expect(result).toHaveLength(2);
    expect(result[0].sha).toBe("abc123");
    expect(result[0].commit.message).toBe("feat: add new feature");
    expect(result[1].sha).toBe("def456");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.github.com/repos/owner/repo/commits?per_page=5",
      expect.objectContaining({
        headers: {
          Authorization: "Bearer mock-token-123",
          Accept: "application/vnd.github.v3+json",
        },
      }),
    );
  });

  it("should throw error when user is not authenticated", async () => {
    // Arrange
    mockGetSession.mockResolvedValue(null);

    // Act & Assert
    await expect(
      getRepositoryCommits("https://github.com/owner/repo"),
    ).rejects.toThrow("Unauthorized");
  });

  it("should throw error when GitHub account is not linked", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(null);

    // Act & Assert
    await expect(
      getRepositoryCommits("https://github.com/owner/repo"),
    ).rejects.toThrow("GitHub account not linked or access token missing");
  });

  it("should throw error when access token is missing", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: null,
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);

    // Act & Assert
    await expect(
      getRepositoryCommits("https://github.com/owner/repo"),
    ).rejects.toThrow("GitHub account not linked or access token missing");
  });

  it("should return empty array when GitHub API returns error", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      status: 404,
      text: async () => "Not Found",
    });

    // Act
    const result = await getRepositoryCommits("https://github.com/owner/repo");

    // Assert
    expect(result).toEqual([]);
  });

  it("should throw error for invalid repository URL format", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);

    // Act & Assert
    await expect(getRepositoryCommits("invalid-url")).rejects.toThrow(
      "Invalid repository URL",
    );
  });

  it("should handle commits with null author", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    const mockCommits = [
      {
        sha: "abc123",
        commit: {
          message: "feat: add new feature",
          author: {
            name: "John Doe",
            email: "john@example.com",
            date: "2026-01-28T01:00:00Z",
          },
        },
        html_url: "https://github.com/owner/repo/commit/abc123",
        author: null, // This can happen for commits by deleted users
      },
    ];

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => mockCommits,
    });

    // Act
    const result = await getRepositoryCommits("https://github.com/owner/repo");

    // Assert
    expect(result).toHaveLength(1);
    expect(result[0].author).toBeNull();
  });

  it("should handle repository URLs with .git suffix", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => [],
    });

    // Act
    await getRepositoryCommits("https://github.com/owner/repo.git");

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.github.com/repos/owner/repo/commits?per_page=5",
      expect.any(Object),
    );
  });

  it("should return empty array when repository has no commits", async () => {
    // Arrange
    const mockSession = {
      user: { id: "user-123" },
    };

    const mockAccount = {
      userId: "user-123",
      providerId: "github",
      accessToken: "mock-token-123",
    };

    mockGetSession.mockResolvedValue(mockSession);
    mockPrismaAccountFindFirst.mockResolvedValue(mockAccount);
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => [],
    });

    // Act
    const result = await getRepositoryCommits("https://github.com/owner/repo");

    // Assert
    expect(result).toEqual([]);
  });
});
