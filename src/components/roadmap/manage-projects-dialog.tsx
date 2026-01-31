"use client";

import { Loader2, Plus, Settings, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import {
  addProjectToRoadmap,
  removeProjectFromRoadmap,
} from "@/actions/roadmap";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { Project } from "@/lib/zod";

type ManageProjectsDialogProps = {
  roadmapId: string;
  allProjects: Project[];
  existingProjectIds: string[];
};

export function ManageProjectsDialog({
  roadmapId,
  allProjects,
  existingProjectIds,
}: ManageProjectsDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const availableProjects = allProjects.filter(
    (p) => !existingProjectIds.includes(p.id),
  );

  // Find projects that are currently in the roadmap for "Remove" list
  const currentProjects = allProjects.filter((p) =>
    existingProjectIds.includes(p.id),
  );

  const handleAdd = (projectId: string) => {
    startTransition(async () => {
      await addProjectToRoadmap(roadmapId, projectId);
    });
  };

  const handleRemove = (projectId: string) => {
    startTransition(async () => {
      await removeProjectFromRoadmap(roadmapId, projectId);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Manage Projects
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Manage Projects</DialogTitle>
          <DialogDescription>
            Add or remove projects from this roadmap.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">Available Projects</h4>
            <ScrollArea className="h-[200px] rounded-md border p-2">
              {availableProjects.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No available projects found.
                </p>
              ) : (
                <div className="space-y-2">
                  {availableProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-2 rounded-md bg-muted/50"
                    >
                      <span className="text-sm font-medium truncate max-w-[250px]">
                        {project.title}
                      </span>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAdd(project.id)}
                        disabled={isPending}
                      >
                        {isPending ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Plus className="h-3 w-3 mr-1" />
                        )}
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Included Projects</h4>
            <ScrollArea className="h-[150px] rounded-md border p-2">
              {currentProjects.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No projects in this roadmap.
                </p>
              ) : (
                <div className="space-y-2">
                  {currentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-2 rounded-md bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900"
                    >
                      <span className="text-sm font-medium truncate max-w-[250px]">
                        {project.title}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                        onClick={() => handleRemove(project.id)}
                        disabled={isPending}
                      >
                        {isPending ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Trash2 className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
