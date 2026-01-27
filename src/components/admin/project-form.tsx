"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getMyRepositories, type GitHubRepo } from "@/actions/github";
import { createProject } from "@/actions/project";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    published: z.boolean(),
    repositoryUrls: z.array(z.string()).max(5, {
        message: "You can select up to 5 repositories.",
    }),
});

type ProjectFormValues = z.infer<typeof formSchema>;

export function ProjectForm() {
    const router = useRouter();
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loadingRepos, setLoadingRepos] = useState(false);
    const [selectedRepos, setSelectedRepos] = useState<GitHubRepo[]>([]);

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            published: false,
            repositoryUrls: [],
        },
    });

    useEffect(() => {
        async function fetchRepos() {
            setLoadingRepos(true);
            try {
                const data = await getMyRepositories();
                setRepos(data);
            } catch (error) {
                toast.error("Failed to load repositories");
            } finally {
                setLoadingRepos(false);
            }
        }
        fetchRepos();
    }, []);

    function toggleRepo(repo: GitHubRepo) {
        const currentUrls = form.getValues("repositoryUrls");
        if (currentUrls.includes(repo.html_url)) {
            form.setValue(
                "repositoryUrls",
                currentUrls.filter((url) => url !== repo.html_url)
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
            // Find names for the selected URLs
            // This is a bit redundant but ensures we pass names too if we want to store them
            // For now the action just takes urls, but we can pass more data if needed.
            // Actually the schema in action/project should probably take name too.
            // But for MVP let's just pass what the form gives.
            // Wait, I haven't created the project action yet. I'll pass the full repo objects effectively.

            const repositories = selectedRepos.map(repo => ({
                url: repo.html_url,
                name: repo.full_name
            }));

            await createProject({
                title: values.title,
                description: values.description,
                published: values.published,
                repositories: repositories
            });

            toast.success("Project created successfully");
            router.push("/admin");
            router.refresh();
        } catch (error) {
            toast.error("Failed to create project");
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
                                <FormLabel>
                                    Published
                                </FormLabel>
                                <FormDescription>
                                    This project will be visible to the public.
                                </FormDescription>
                            </div>
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
                            repos.map(repo => (
                                <div key={repo.id} className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded">
                                    <Checkbox
                                        id={`repo-${repo.id}`}
                                        checked={selectedRepos.some(r => r.id === repo.id)}
                                        onCheckedChange={() => toggleRepo(repo)}
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor={`repo-${repo.id}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                        >
                                            {repo.full_name}
                                            {repo.private && <Badge variant="secondary" className="ml-2 text-xs">Private</Badge>}
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
                    <FormMessage>{form.formState.errors.repositoryUrls?.message}</FormMessage>
                </div>

                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Project
                </Button>
            </form>
        </Form>
    )
}
