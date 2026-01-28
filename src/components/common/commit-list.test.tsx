import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { GitHubCommit } from "@/actions/github";
import { CommitList } from "./commit-list";

describe("CommitList", () => {
  const mockCommits: GitHubCommit[] = [
    {
      sha: "abc123",
      commit: {
        message: "feat: add new feature\n\nThis is a detailed description",
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

  it("renders commit list correctly", () => {
    render(<CommitList commits={mockCommits} />);

    // Check that commit messages are displayed
    expect(screen.getByText(/feat: add new feature/)).toBeInTheDocument();
    expect(screen.getByText(/fix: bug fix/)).toBeInTheDocument();

    // Check that author names are displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("displays only the first line of commit message", () => {
    render(<CommitList commits={mockCommits} />);

    // Should show first line
    expect(screen.getByText(/feat: add new feature/)).toBeInTheDocument();
    // Should not show the detailed description
    expect(
      screen.queryByText("This is a detailed description"),
    ).not.toBeInTheDocument();
  });

  it("displays commit author avatars", () => {
    render(<CommitList commits={mockCommits} />);

    // Check for Avatar fallback elements (they render with data-slot="avatar-fallback")
    const document = screen.getByText("John Doe").closest("body");
    const avatars = document?.querySelectorAll('[data-slot="avatar-fallback"]');
    expect(avatars?.length).toBeGreaterThanOrEqual(2);
  });

  it("renders links to GitHub commits", () => {
    render(<CommitList commits={mockCommits} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute(
      "href",
      "https://github.com/owner/repo/commit/abc123",
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "https://github.com/owner/repo/commit/def456",
    );
  });

  it("displays empty state when no commits are provided", () => {
    render(<CommitList commits={[]} />);

    expect(
      screen.getByText(/No commits found for this repository/),
    ).toBeInTheDocument();
  });

  it("handles commits with null author", () => {
    const commitsWithNullAuthor: GitHubCommit[] = [
      {
        sha: "abc123",
        commit: {
          message: "feat: commit by deleted user",
          author: {
            name: "Deleted User",
            email: "deleted@example.com",
            date: "2026-01-28T01:00:00Z",
          },
        },
        html_url: "https://github.com/owner/repo/commit/abc123",
        author: null,
      },
    ];

    render(<CommitList commits={commitsWithNullAuthor} />);

    // Should display commit message
    expect(
      screen.getByText(/feat: commit by deleted user/),
    ).toBeInTheDocument();
    // Should display commit author name from commit.author
    expect(screen.getByText("Deleted User")).toBeInTheDocument();
  });

  it("displays loading skeleton when isLoading is true", () => {
    render(<CommitList commits={[]} isLoading={true} />);

    // Check for skeleton elements (they should have specific test IDs or classes)
    const skeletons = screen.getAllByTestId("commit-skeleton");
    expect(skeletons).toHaveLength(3); // Show 3 skeleton items
  });

  it("truncates long commit messages", () => {
    const longMessageCommit: GitHubCommit[] = [
      {
        sha: "abc123",
        commit: {
          message:
            "This is a very long commit message that should be truncated to fit within the UI constraints and not overflow the container",
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
    ];

    render(<CommitList commits={longMessageCommit} />);

    // The full message should be in the DOM (possibly truncated with CSS)
    const messageElement = screen.getByText(
      /This is a very long commit message/,
    );
    expect(messageElement).toBeInTheDocument();
  });

  it("displays relative time for commits", () => {
    render(<CommitList commits={mockCommits} />);

    // Should contain relative time indicators (using Japanese locale: "前" means "ago")
    // The exact text depends on when the test runs, so we just check they exist
    const timeElements = screen.getAllByText(/前/);
    expect(timeElements.length).toBeGreaterThanOrEqual(2);
  });
});
