import { Check, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { RoadmapGoal } from "@prisma/client";

type RoadmapGoalsListProps = {
  goals: RoadmapGoal[];
};

export function RoadmapGoalsList({ goals }: RoadmapGoalsListProps) {
  return (
    <div className="space-y-6">
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals
              .sort((a, b) => a.order - b.order)
              .map((goal) => (
                <div
                  key={goal.id}
                  className="flex items-start gap-2 p-3 border rounded-md"
                >
                  {goal.isCompleted ? (
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  )}
                  <span
                    className={
                      goal.isCompleted
                        ? "line-through text-muted-foreground"
                        : ""
                    }
                  >
                    {goal.content}
                  </span>
                </div>
              ))}
            {goals.length === 0 && (
              <div className="text-center text-muted-foreground py-4">
                No goals defined.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
