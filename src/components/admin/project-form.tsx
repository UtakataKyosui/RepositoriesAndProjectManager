"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { type GitHubRepo, getMyRepositories } from "@/actions/github";
import { createProject, getMyProjects, updateProject } from "@/actions/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import type { ProjectStatus } from "@prisma/client";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  published: z.boolean(),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
  repositoryUrls: z.array(z.string()).max(5, {
    message: "You can select up to 5 repositories.",
  }),
  dependencyIds: z.array(z.string()).optional(),
});

type ProjectFormValues = z.infer<typeof formSchema>;

type ProjectFormProps = {
  projectId?: string;
  initialData?: {
    title: string;
    description?: string | null;
    published: boolean;
    status: ProjectStatus;
    repositories: {
      url: string;
      name: string;
    }[];
    dependencies?: {
      dependencyId: string;
    }[];
  };
};

type ProjectData = Awaited<ReturnType<typeof getMyProjects>>[number];

export function ProjectForm({ projectId, initialData }: ProjectFormProps = {}) {
  const router = useRouter();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [selectedRepos, setSelectedRepos] = useState<GitHubRepo[]>([]);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      published: initialData?.published || false,
      status: initialData?.status || "TODO",
      repositoryUrls: initialData?.repositories.map((r) => r.url) || [],
      dependencyIds:
        initialData?.dependencies?.map((d) => d.dependencyId) || [],
    },
  });

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      setLoadingProjects(true);
      try {
        const data = await getMyProjects();
        // 自分自身は依存先として選択できないように除外
        setProjects(data.filter((p) => p.id !== projectId));
      } catch (_error) {
        toast.error("Failed to load projects");
      } finally {
        setLoadingProjects(false);
      }
    }
    fetchProjects();
  }, [projectId]);

  function toggleDependency(projectId: string) {
    const currentIds = form.getValues("dependencyIds") || [];
    if (currentIds.includes(projectId)) {
      form.setValue(
        "dependencyIds",
        currentIds.filter((id) => id !== projectId),
      );
    } else {
      form.setValue("dependencyIds", [...currentIds, projectId]);
    }
  }

  useEffect(() => {
    async function fetchRepos() {
      setLoadingRepos(true);
      try {
        const data = await getMyRepositories();
        setRepos(data);
      } catch (_error) {
        toast.error("Failed to load repositories");
      } finally {
        setLoadingRepos(false);
      }
    }
    fetchRepos();
  }, []);

  // 初期データがある場合、選択済みリポジトリを設定
  useEffect(() => {
    if (initialData?.repositories.length && repos.length > 0) {
      const selectedRepoUrls = initialData.repositories.map((r) => r.url);
      const selected = repos.filter((r) =>
        selectedRepoUrls.includes(r.html_url),
      );
      setSelectedRepos(selected);
    }
  }, [initialData, repos]);

  function toggleRepo(repo: GitHubRepo) {
    const currentUrls = form.getValues("repositoryUrls");
    if (currentUrls.includes(repo.html_url)) {
      form.setValue(
        "repositoryUrls",
        currentUrls.filter((url) => url !== repo.html_url),
      );
      setSelectedRepos((prev) => prev.filter((r) => r.id !== repo.id));
    } else {
      if (currentUrls.length >= 5) {
        toast.warning("You can only select up to 5 repositories");
        return;
      }
      form.setValue("repositoryUrls", [...currentUrls, repo.html_url]);
      setSelectedRepos((prev) => [...prev, repo]);
    }
  }

  async function onSubmit(values: ProjectFormValues) {
    try {
      const repositories = selectedRepos.map((repo) => ({
        url: repo.html_url,
        name: repo.full_name,
      }));

      if (projectId) {
        // 編集モード
        await updateProject(projectId, {
          title: values.title,
          description: values.description,
          published: values.published,
          status: values.status,
          repositories: repositories,
          dependencyIds: values.dependencyIds,
        });
        toast.success("Project updated successfully");
      } else {
        // 新規作成モード
        await createProject({
          title: values.title,
          description: values.description,
          published: values.published,
          status: values.status,
          repositories: repositories,
          dependencyIds: values.dependencyIds,
        });
        toast.success("Project created successfully");
      }

      router.push("/admin");
      router.refresh();
    } catch (_error) {
      toast.error(`Failed to ${projectId ? "update" : "create"} project`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Project Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Project description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Published</FormLabel>
                <FormDescription>
                  This project will be visible to the public.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="TODO">TODO</SelectItem>
                  <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                  <SelectItem value="DONE">Done</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Current status of this project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Repositories (Max 5)</h3>
          <div className="border rounded-md p-4 h-64 overflow-y-auto space-y-2">
            {loadingRepos ? (
              <div className="flex justify-center p-4">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            ) : repos.length > 0 ? (
              repos.map((repo) => (
                <div
                  key={repo.id}
                  className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded"
                >
                  <Checkbox
                    id={`repo-${repo.id}`}
                    checked={selectedRepos.some((r) => r.id === repo.id)}
                    onCheckedChange={() => toggleRepo(repo)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={`repo-${repo.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {repo.full_name}
                      {repo.private && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Private
                        </Badge>
                      )}
                    </label>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {repo.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground p-4">
                No repositories found.
              </div>
            )}
          </div>
          <FormMessage>
            {form.formState.errors.repositoryUrls?.message}
          </FormMessage>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Dependencies</h3>
          <p className="text-sm text-muted-foreground">
            Select other projects that this project depends on.
          </p>
          <div className="border rounded-md p-4 h-64 overflow-y-auto space-y-2">
            {loadingProjects ? (
              <div className="flex justify-center p-4">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded"
                >
                  <Checkbox
                    id={`dep-${project.id}`}
                    checked={(form.watch("dependencyIds") || []).includes(
                      project.id,
                    )}
                    onCheckedChange={() => toggleDependency(project.id)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={`dep-${project.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {project.title}
                    </label>
                    {project.description && (
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground p-4">
                No other projects found.
              </div>
            )}
          </div>
        </div>

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {projectId ? "Update Project" : "Create Project"}
        </Button>
      </form>
    </Form>
  );
}
