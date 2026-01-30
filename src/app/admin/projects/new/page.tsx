import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create Project</h3>
        <p className="text-sm text-muted-foreground">
          Create a new project and link your GitHub repositories.
        </p>
      </div>
      <ProjectForm />
    </div>
  );
}
