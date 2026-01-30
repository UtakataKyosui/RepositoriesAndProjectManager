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
import {
  Check,
  CheckCircle2,
  Circle,
  GripVertical,
  Loader2,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useState, useTransition } from "react";
import {
  addRoadmapGoal,
  deleteRoadmapGoal,
  reorderRoadmapGoals,
  toggleRoadmapGoal,
  updateRoadmapGoal,
} from "@/actions/roadmap";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Goal = {
  id: string;
  content: string;
  isCompleted: boolean;
  order: number;
};

type GoalManagerProps = {
  roadmapId: string;
  goals: Goal[];
  isOwner: boolean;
};

// Sortable Item Component
function SortableGoalItem({
  goal,
  isOwner,
  onDelete,
  onToggle,
  onUpdate,
}: {
  goal: Goal;
  isOwner: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string, checked: boolean) => void;
  onUpdate: (id: string, content: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: goal.id, disabled: !isOwner });

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(goal.content);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(() => {
      onUpdate(goal.id, editContent);
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    setEditContent(goal.content);
    setIsEditing(false);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  if (isEditing) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex items-center gap-2 p-2 bg-muted/50 rounded-md mb-2"
      >
        <Input
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="flex-1"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={handleSave}
          disabled={isPending}
        >
          <Check className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost" onClick={handleCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-start gap-3 p-2 rounded-md mb-2 group",
        isDragging && "bg-muted",
      )}
    >
      {isOwner && (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 cursor-grab touch-none mt-0.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </Button>
      )}

      {isOwner ? (
        <Checkbox
          checked={goal.isCompleted}
          onCheckedChange={(checked) => onToggle(goal.id, checked as boolean)}
          className="mt-1.5"
        />
      ) : goal.isCompleted ? (
        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
      ) : (
        <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
      )}

      <button
        type="button"
        className={cn(
          "flex-1 text-sm leading-relaxed cursor-pointer py-0.5 text-left bg-transparent border-0",
          goal.isCompleted && "text-muted-foreground line-through",
        )}
        onClick={() => isOwner && setIsEditing(true)}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && isOwner) {
            e.preventDefault();
            setIsEditing(true);
          }
        }}
      >
        {goal.content}
      </button>

      {isOwner && (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onDelete(goal.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export function GoalManager({
  roadmapId,
  goals: initialGoals,
  isOwner,
}: GoalManagerProps) {
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleAdd = () => {
    if (!newGoal.trim()) return;
    startTransition(async () => {
      // Optimistic update could be complex without ID, so wait for server
      // But for better UX we might want pseudo-id. For now, simple wait.
      const added = await addRoadmapGoal(roadmapId, newGoal);
      setGoals([...goals, added]);
      setNewGoal("");
    });
  };

  const handleToggle = (id: string, checked: boolean) => {
    setGoals(
      goals.map((g) => (g.id === id ? { ...g, isCompleted: checked } : g)),
    );
    startTransition(async () => {
      await toggleRoadmapGoal(id, checked);
    });
  };

  const handleDelete = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
    startTransition(async () => {
      await deleteRoadmapGoal(id);
    });
  };

  const handleUpdate = (id: string, content: string) => {
    setGoals(goals.map((g) => (g.id === id ? { ...g, content } : g)));
    startTransition(async () => {
      await updateRoadmapGoal(id, content);
    });
  };

  const handleDragStart = (event: { active: { id: string | number } }) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setGoals((currentGoals) => {
        const oldIndex = currentGoals.findIndex(
          (item) => item.id === active.id,
        );
        const newIndex = currentGoals.findIndex((item) => item.id === over.id);
        const newGoals = arrayMove(currentGoals, oldIndex, newIndex);

        startTransition(async () => {
          await reorderRoadmapGoals(
            roadmapId,
            newGoals.map((g) => g.id),
          );
        });

        return newGoals;
      });
    }

    setActiveId(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Goals</h3>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={goals.map((g) => g.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-1">
            {goals.map((goal) => (
              <SortableGoalItem
                key={goal.id}
                goal={goal}
                isOwner={isOwner}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onUpdate={handleUpdate}
              />
            ))}
            {goals.length === 0 && (
              <p className="text-muted-foreground italic text-sm py-2">
                No goals defined
              </p>
            )}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div className="p-3 bg-card border rounded-md shadow-lg opacity-80">
              {goals.find((g) => g.id === activeId)?.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {isOwner && (
        <div className="flex items-center gap-2 mt-4">
          <Input
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new goal..."
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            disabled={isPending}
          />
          <Button
            size="icon"
            onClick={handleAdd}
            disabled={isPending || !newGoal.trim()}
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
