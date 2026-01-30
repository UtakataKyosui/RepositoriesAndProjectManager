"use client";

import { Check, Loader2, Pencil, X } from "lucide-react";
import { useState, useTransition } from "react";
import { updateRoadmap } from "@/actions/roadmap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type RoadmapDetailsEditorProps = {
  id: string;
  initialTitle: string;
  initialDescription: string | null;
  isOwner: boolean;
};

export function RoadmapDetailsEditor({
  id,
  initialTitle,
  initialDescription,
  isOwner,
}: RoadmapDetailsEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription || "");
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      await updateRoadmap(id, { title, description });
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setDescription(initialDescription || "");
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
      <h1 className="text-3xl font-bold mb-2 pr-10">{title}</h1>
      <p className="text-muted-foreground min-h-[1.5em] whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
}
