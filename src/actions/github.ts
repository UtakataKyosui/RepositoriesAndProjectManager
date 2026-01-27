"use server";

import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";

export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    private: boolean;
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
        const res = await fetch("https://api.github.com/user/repos?sort=updated&per_page=100", {
            headers: {
                Authorization: `Bearer ${account.accessToken}`,
                Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (!res.ok) {
            console.error("GitHub API error:", res.status, await res.text());
            throw new Error("Failed to fetch repositories from GitHub");
        }

        const repos = await res.json();
        return repos.map((repo: any) => ({
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
