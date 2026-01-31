"use client";

import { Check, Loader2, Pencil, X } from "lucide-react";
import { useState, useTransition } from "react";
import { updateRoadmap } from "@/actions/roadmap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import type { ProjectStatus } from "@prisma/client";

import type { Roadmap } from "@prisma/client";

type RoadmapDetailsEditorProps = {
  id: string;
  initialTitle: Roadmap["title"];
  initialDescription: Roadmap["description"];
  initialPublished: boolean;
  initialStatus: ProjectStatus;
  isOwner: boolean;
};

export function RoadmapDetailsEditor({
  id,
  initialTitle,
  initialDescription,
  initialPublished,
  initialStatus,
  isOwner,
}: RoadmapDetailsEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription || "");
  const [published, setPublished] = useState(initialPublished);
  const [status, setStatus] = useState<ProjectStatus>(initialStatus);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      await updateRoadmap(id, { title, description, published, status });
      setIsEditing(false);
    });
  };

  const handlePublishedToggle = (checked: boolean) => {
    setPublished(checked);
    startTransition(async () => {
      await updateRoadmap(id, { title, description, published: checked });
    });
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setDescription(initialDescription || "");
    setPublished(initialPublished);
    setStatus(initialStatus);
    setIsEditing(false);
  };

  if (!isOwner) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-2">{initialTitle}</h1>
        <p className="text-muted-foreground">{initialDescription}</p>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="space-y-4 border rounded-md p-4 bg-muted/20">
        <div className="space-y-2">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Roadmap Title"
            className="text-lg font-bold"
            disabled={isPending}
          />
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            className="min-h-[100px]"
            disabled={isPending}
          />
          <div className="flex items-center gap-3 pt-2">
            <Switch
              id="published"
              checked={published}
              onCheckedChange={setPublished}
              disabled={isPending}
            />
            <label
              htmlFor="published"
              className="text-sm font-medium cursor-pointer"
            >
              Published
            </label>
          </div>
          <div className="pt-2">
            <label className="text-sm font-medium block mb-2">Status</label>
            <Select
              value={status}
              onValueChange={(value) => setStatus(value as ProjectStatus)}
              disabled={isPending}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TODO">TODO</SelectItem>
                <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                <SelectItem value="DONE">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCancel}
            disabled={isPending}
          >
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave} disabled={isPending}>
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin mr-1" />
            ) : (
              <Check className="h-4 w-4 mr-1" />
            )}
            Save
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => setIsEditing(true)}
        >
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold pr-10">{title}</h1>
        <Badge variant={published ? "default" : "secondary"}>
          {published ? "Published" : "Draft"}
        </Badge>
        <Badge
          variant={
            status === "DONE"
              ? "default"
              : status === "IN_PROGRESS"
                ? "outline"
                : "secondary"
          }
          className={
            status === "DONE"
              ? "bg-green-600 text-white hover:bg-green-700"
              : status === "IN_PROGRESS"
                ? "border-blue-500 text-blue-600"
                : ""
          }
        >
          {status === "TODO"
            ? "TODO"
            : status === "IN_PROGRESS"
              ? "In Progress"
              : "Done"}
        </Badge>
      </div>
      <p className="text-muted-foreground min-h-[1.5em] whitespace-pre-wrap">
        {description}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <Switch
          id="published-toggle"
          checked={published}
          onCheckedChange={handlePublishedToggle}
          disabled={isPending}
        />
        <label
          htmlFor="published-toggle"
          className="text-sm font-medium cursor-pointer"
        >
          {published ? "Public" : "Private"}
        </label>
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
    </div>
  );
}
