"use server";

import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type CreateProjectInput = {
    title: string;
    description?: string;
    published: boolean;
    repositories: {
        url: string;
        name: string;
    }[];
};

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
        },
    });

    revalidatePath("/admin");
    revalidatePath("/");
    return project;
}
