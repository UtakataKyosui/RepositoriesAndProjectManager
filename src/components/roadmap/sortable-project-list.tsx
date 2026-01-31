"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { reorderRoadmapProjects } from "@/actions/roadmap";
import { Button } from "@/components/ui/button";

import type { RoadmapProject } from "@/lib/zod";

type SortableProject = Pick<RoadmapProject, "projectId"> & {
  title: string;
};

type SortableProjectListProps = {
  roadmapId: string;
  projects: SortableProject[];
};

function SortableItem({ id, title }: { id: string; title: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between p-3 bg-card border rounded-md shadow-sm mb-2"
    >
      <span className="font-medium truncate flex-1">{title}</span>
      <Button
        variant="ghost"
        size="sm"
        className="cursor-grab touch-none"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function SortableProjectList({
  roadmapId,
  projects: initialProjects,
}: SortableProjectListProps) {
  const [items, setItems] = useState(initialProjects);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [_isPending, startTransition] = useTransition();

  useEffect(() => {
    setItems(initialProjects);
  }, [initialProjects]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: { active: { id: string | number } }) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(
          (item) => item.projectId === active.id,
        );
        const newIndex = items.findIndex((item) => item.projectId === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);

        // Optimistic update done, now sync with server
        startTransition(async () => {
          await reorderRoadmapProjects(
            roadmapId,
            newItems.map((item) => item.projectId),
          );
        });

        return newItems;
      });
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-4">
        <h3 className="tex-sm font-medium text-muted-foreground uppercase tracking-wider">
          Project Order
        </h3>
        <SortableContext
          items={items.map((item) => item.projectId)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {items.map((project) => (
              <SortableItem
                key={project.projectId}
                id={project.projectId}
                title={project.title}
              />
            ))}
          </div>
        </SortableContext>
      </div>

      <DragOverlay>
        {activeId ? (
          <div className="flex items-center justify-between p-3 bg-card border rounded-md shadow-lg opacity-80">
            <span className="font-medium truncate flex-1">
              {items.find((i) => i.projectId === activeId)?.title}
            </span>
            <Button variant="ghost" size="sm">
              <GripVertical className="h-4 w-4" />
            </Button>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
