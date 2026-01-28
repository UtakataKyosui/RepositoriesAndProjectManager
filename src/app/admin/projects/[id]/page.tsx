import { getSession } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/project-form";

export const dynamic = 'force-dynamic';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: PageProps) {
    const session = await getSession();

    if (!session) {
        redirect("/");
    }

    const { id } = await params;

    const project = await prisma.project.findUnique({
        where: {
            id: id,
            userId: session.user.id, // 本人のプロジェクトのみ
        },
        include: {
            repositories: true,
        },
    });

    if (!project) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Edit Project</h3>
                <p className="text-sm text-muted-foreground">
                    Update your project details and linked repositories.
                </p>
            </div>
            <ProjectForm
                projectId={project.id}
                initialData={{
                    title: project.title,
                    description: project.description,
                    published: project.published,
                    repositories: project.repositories.map(r => ({
                        url: r.url,
                        name: r.name,
                    })),
                }}
            />
        </div>
    );
}
