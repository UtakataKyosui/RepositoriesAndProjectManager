"use server";

import { getSession } from "@/lib/auth/session";
import prisma from "@/lib/db/prisma";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  private: boolean;
};

export type GitHubCommit = {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  html_url: string;
  author: {
    avatar_url: string;
    login: string;
  } | null;
};

export async function getMyRepositories(): Promise<GitHubRepo[]> {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  // Fetch the user's account to get the access token
  const account = await prisma.account.findFirst({
    where: {
      userId: session.user.id,
      providerId: "github",
    },
  });

  if (!account || !account.accessToken) {
    throw new Error("GitHub account not linked or access token missing");
  }

  try {
    const res = await fetch(
      "https://api.github.com/user/repos?sort=updated&per_page=100",
      {
        headers: {
          Authorization: `Bearer ${account.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      },
    );

    if (!res.ok) {
      console.error("GitHub API error:", res.status, await res.text());
      throw new Error("Failed to fetch repositories from GitHub");
    }

    const repos = (await res.json()) as Array<{
      id: number;
      name: string;
      full_name: string;
      html_url: string;
      description: string | null;
      private: boolean;
    }>;
    return repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      description: repo.description,
      private: repo.private,
    }));
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}

/**
 * リポジトリURLから owner/repo 形式を抽出
 */
function parseRepoUrl(url: string): { owner: string; repo: string } {
  try {
    // .git サフィックスを削除
    const cleanUrl = url.replace(/\.git$/, "");

    // URLをパース
    const urlObj = new URL(cleanUrl);

    // パス名から owner/repo を取得 (例: /owner/repo)
    const pathParts = urlObj.pathname.split("/").filter(Boolean);

    if (pathParts.length < 2) {
      throw new Error("Invalid repository URL format");
    }

    return {
      owner: pathParts[0],
      repo: pathParts[1],
    };
  } catch (_error) {
    throw new Error("Invalid repository URL");
  }
}

/**
 * 指定されたリポジトリの最新コミット履歴（最大5件）を取得
 */
export async function getRepositoryCommits(
  repoUrl: string,
): Promise<GitHubCommit[]> {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  // Fetch the user's account to get the access token
  const account = await prisma.account.findFirst({
    where: {
      userId: session.user.id,
      providerId: "github",
    },
  });

  if (!account || !account.accessToken) {
    throw new Error("GitHub account not linked or access token missing");
  }

  // リポジトリURLをパース
  const { owner, repo } = parseRepoUrl(repoUrl);

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`,
      {
        headers: {
          Authorization: `Bearer ${account.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      },
    );

    if (!res.ok) {
      console.error(
        `GitHub API error for ${owner}/${repo}:`,
        res.status,
        await res.text(),
      );
      return [];
    }

    const commits = (await res.json()) as Array<{
      sha: string;
      commit: {
        message: string;
        author: {
          name: string;
          email: string;
          date: string;
        };
      };
      html_url: string;
      author: {
        avatar_url: string;
        login: string;
      } | null;
    }>;
    return commits.map((commit) => ({
      sha: commit.sha,
      commit: {
        message: commit.commit.message,
        author: {
          name: commit.commit.author.name,
          email: commit.commit.author.email,
          date: commit.commit.author.date,
        },
      },
      html_url: commit.html_url,
      author: commit.author
        ? {
            avatar_url: commit.author.avatar_url,
            login: commit.author.login,
          }
        : null,
    }));
  } catch (error) {
    console.error(`Error fetching commits for ${owner}/${repo}:`, error);
    return [];
  }
}
