"use client";

import {
  Background,
  Controls,
  type Edge,
  Handle,
  MarkerType,
  MiniMap,
  type Node,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import "@xyflow/react/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import { Box, Check, Circle, Flag } from "lucide-react";
import { useRouter } from "next/navigation";

// Project Node logic
type RoadmapGraphProps = {
  projects: {
    id: string;
    title: string;
    order: number;
    description: string | null;
  }[];
  goals: {
    id: string;
    content: string;
    order: number;
    isCompleted: boolean;
  }[];
};

const nodeWidth = 200;
const nodeHeight = 80;

const elk = new ELK();

function CustomNode({
  data,
  isConnectable,
}: {
  data: { label: string; order: number };
  isConnectable: boolean;
}) {
  return (
    <div
      className="rounded-lg p-3 bg-card border-2 border-primary shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-center h-full relative"
      style={{ width: nodeWidth, height: nodeHeight }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="invisible"
      />
      <div className="flex items-center gap-2 mb-1">
        <Box className="h-4 w-4 text-primary" />
        <span className="text-xs font-bold text-muted-foreground">
          Step {data.order}
        </span>
      </div>
      <div className="font-semibold text-sm line-clamp-2 leading-tight">
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="invisible"
      />
    </div>
  );
}

function GoalNode({
  data,
  isConnectable,
}: {
  data: { label: string; order: number; isCompleted: boolean };
  isConnectable: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-3 border-2 shadow-sm transition-all flex flex-col justify-center h-full relative ${
        data.isCompleted
          ? "bg-green-50/50 border-green-500/50"
          : "bg-muted/50 border-muted-foreground/50 dash-border"
      }`}
      style={{ width: nodeWidth, height: nodeHeight }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="invisible"
      />
      <div className="flex items-center gap-2 mb-1">
        {data.isCompleted ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Flag className="h-4 w-4 text-muted-foreground" />
        )}
        <span
          className={`text-xs font-bold ${
            data.isCompleted ? "text-green-700" : "text-muted-foreground"
          }`}
        >
          Goal
        </span>
      </div>
      <div
        className={`font-semibold text-sm line-clamp-2 leading-tight ${
          data.isCompleted ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="invisible"
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
  goal: GoalNode,
};

const getLayoutedElements = async (nodes: Node[], edges: Edge[]) => {
  const graph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": "80",
      "elk.layered.spacing.nodeNodeBetweenLayers": "100",
    },
    children: nodes.map((node) => ({
      id: node.id,
      width: nodeWidth,
      height: nodeHeight,
    })),
    edges: edges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layoutedGraph = await elk.layout(graph);

  const layoutedNodes = nodes.map((node) => {
    const layoutedNode = layoutedGraph.children?.find((n) => n.id === node.id);
    return {
      ...node,
      position: {
        x: layoutedNode?.x ?? 0,
        y: layoutedNode?.y ?? 0,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });

  return { nodes: layoutedNodes, edges };
};

export function RoadmapGraph({ projects, goals }: RoadmapGraphProps) {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const computeLayout = async () => {
      // 1. Convert Projects to Nodes
      const projectNodes: Node[] = projects.map((p) => ({
        id: p.id,
        type: "custom",
        data: { label: p.title, order: p.order },
        position: { x: 0, y: 0 },
      }));

      // 2. Convert Goals to Nodes
      const goalNodes: Node[] = goals.map((g) => ({
        id: g.id,
        type: "goal",
        data: {
          label: g.content,
          order: g.order,
          isCompleted: g.isCompleted,
        },
        position: { x: 0, y: 0 },
      }));

      const initialNodes = [...projectNodes, ...goalNodes];

      const initialEdges: Edge[] = [];

      // 3. Connect Projects sequentially
      for (let i = 0; i < projects.length - 1; i++) {
        initialEdges.push({
          id: `e-${projects[i].id}-${projects[i + 1].id}`,
          source: projects[i].id,
          target: projects[i + 1].id,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: "#64748b",
          },
          style: {
            stroke: "#64748b",
            strokeWidth: 2,
          },
        });
      }

      // 4. Connect Goals sequentially
      for (let i = 0; i < goals.length - 1; i++) {
        initialEdges.push({
          id: `e-goal-${goals[i].id}-${goals[i + 1].id}`,
          source: goals[i].id,
          target: goals[i + 1].id,
          type: "smoothstep",
          animated: false,
          style: {
            stroke: "#94a3b8", // lighter slate
            strokeWidth: 2,
            strokeDasharray: "5 5", // dashed line for goals
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 15,
            height: 15,
            color: "#94a3b8",
          },
        });
      }

      const { nodes: lNodes, edges: lEdges } = await getLayoutedElements(
        initialNodes,
        initialEdges,
      );
      setNodes(lNodes);
      setEdges(lEdges);
      setIsLoading(false);
    };

    computeLayout();
  }, [projects, goals, setNodes, setEdges]);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      // Only navigate if it's a project node
      if (node.type === "custom") {
        router.push(`/projects/${node.id}`);
      }
    },
    [router],
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Loading graph...
      </div>
    );
  }

  if (nodes.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No projects or goals items in this roadmap yet.
      </div>
    );
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      fitView
      attributionPosition="bottom-right"
    >
      <Controls />
      <MiniMap zoomable pannable />
      <Background gap={12} size={1} className="bg-muted/10" />
    </ReactFlow>
  );
}
