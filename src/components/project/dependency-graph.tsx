"use client";

import {
  Background,
  Controls,
  type Edge,
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
import { Box } from "lucide-react";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { ProjectStatus } from "@prisma/client";

type DependencyGraphProps = {
  currentProject: {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatus;
  };
  dependencies: {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatus;
  }[]; // Projects I depend on (Outgoing)
  dependents: {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatus;
  }[]; // Projects that depend on me (Incoming)
};

type NodeData = {
  label: string;
  description?: string | null;
  nodeType: "current" | "dependency" | "dependent";
  status: ProjectStatus;
};

const nodeWidth = 220;
const nodeHeight = 150;

const elk = new ELK();

// カスタムノードコンポーネント
function CustomNode({ data }: { data: NodeData }) {
  const { label, description, nodeType, status } = data;

  const getNodeStyles = () => {
    // DONEステータスの場合は緑背景・白文字を優先
    if (status === "DONE") {
      return "bg-green-600 text-white border-2 border-green-700 shadow-lg";
    }
    // IN_PROGRESSの場合
    if (status === "IN_PROGRESS") {
      return "bg-blue-100 text-blue-900 border-2 border-blue-500 shadow-md";
    }
    // TODOの場合は従来のnodeType別スタイル
    switch (nodeType) {
      case "current":
        return "bg-primary text-primary-foreground border-2 border-primary shadow-lg";
      case "dependency":
        return "bg-secondary text-secondary-foreground border-2 border-blue-500";
      case "dependent":
        return "bg-accent text-accent-foreground border-2 border-green-500";
    }
  };

  const getLabel = () => {
    switch (nodeType) {
      case "current":
        return "このプロジェクト";
      case "dependency":
        return "依存先";
      case "dependent":
        return "依存元";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "DONE":
        return "Done";
      case "IN_PROGRESS":
        return "In Progress";
      default:
        return "TODO";
    }
  };

  return (
    <div
      className={`rounded-lg p-3 ${getNodeStyles()} transition-all hover:shadow-xl cursor-pointer flex flex-col`}
      style={{ width: nodeWidth, height: nodeHeight }}
    >
      <div className="flex items-center gap-2 mb-2 shrink-0">
        <Box className="h-4 w-4" />
        <span className="text-xs font-medium opacity-75">{getLabel()}</span>
        <span
          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
            status === "DONE"
              ? "bg-white/20 text-white"
              : status === "IN_PROGRESS"
                ? "bg-blue-200 text-blue-800"
                : "bg-muted text-muted-foreground"
          }`}
        >
          {getStatusLabel()}
        </span>
      </div>
      <div className="font-semibold text-sm line-clamp-1 break-words shrink-0 mb-2">
        {label}
      </div>
      <ScrollArea
        className={`flex-1 w-full opacity-80 rounded-md border p-1 ${
          status === "DONE" ? "bg-white/10 border-white/20" : "bg-background/10"
        }`}
      >
        <p className="text-[10px] leading-tight break-words whitespace-pre-wrap">
          {description || "No description"}
        </p>
      </ScrollArea>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

const getLayoutedElements = async (nodes: Node[], edges: Edge[]) => {
  const graph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": "100",
      "elk.layered.spacing.nodeNodeBetweenLayers": "120",
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

export function DependencyGraph({
  currentProject,
  dependencies,
  dependents,
}: DependencyGraphProps) {
  const router = useRouter();
  const [layoutedNodes, setLayoutedNodes] = useState<Node[]>([]);
  const [layoutedEdges, setLayoutedEdges] = useState<Edge[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const computeLayout = async () => {
      const nodes: Node<NodeData>[] = [];
      const edges: Edge[] = [];

      // Current Project (Center)
      nodes.push({
        id: currentProject.id,
        type: "custom",
        data: {
          label: currentProject.title,
          description: currentProject.description,
          nodeType: "current",
          status: currentProject.status,
        },
        position: { x: 0, y: 0 },
      });

      // Dependencies (Projects this one depends on) -> Me -> Them
      dependencies.forEach((dep) => {
        nodes.push({
          id: dep.id,
          type: "custom",
          data: {
            label: dep.title,
            description: dep.description,
            nodeType: "dependency",
            status: dep.status,
          },
          position: { x: 0, y: 0 },
        });
        edges.push({
          id: `e-${currentProject.id}-${dep.id}`,
          source: currentProject.id,
          target: dep.id,
          animated: true,
          type: "smoothstep",
          label: "依存",
          style: { stroke: "#3b82f6" },
          labelStyle: { fill: "#3b82f6", fontWeight: 600 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "#3b82f6",
          },
        });
      });

      // Dependents (Projects that depend on this one) -> Them -> Me
      dependents.forEach((dep) => {
        nodes.push({
          id: dep.id,
          type: "custom",
          data: {
            label: dep.title,
            description: dep.description,
            nodeType: "dependent",
            status: dep.status,
          },
          position: { x: 0, y: 0 },
        });
        edges.push({
          id: `e-${dep.id}-${currentProject.id}`,
          source: dep.id,
          target: currentProject.id,
          animated: true,
          type: "smoothstep",
          label: "依存",
          style: { stroke: "#22c55e" },
          labelStyle: { fill: "#22c55e", fontWeight: 600 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "#22c55e",
          },
        });
      });

      const { nodes: lNodes, edges: lEdges } = await getLayoutedElements(
        nodes,
        edges,
      );
      setLayoutedNodes(lNodes);
      setLayoutedEdges(lEdges);
      setIsLoading(false);
    };

    computeLayout();
  }, [currentProject, dependencies, dependents]);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  // Update nodes and edges when layout is computed
  useEffect(() => {
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [layoutedNodes, layoutedEdges, setNodes, setEdges]);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      if (node.id !== currentProject.id) {
        router.push(`/projects/${node.id}`);
      }
    },
    [router, currentProject.id],
  );

  if (isLoading) {
    return (
      <div className="h-[500px] border rounded-lg bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading graph...</p>
      </div>
    );
  }

  return (
    <div className="h-[500px] border rounded-lg bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap
          className="bg-background"
          nodeColor={(node) => {
            const data = node.data as NodeData;
            switch (data.nodeType) {
              case "current":
                return "hsl(var(--primary))";
              case "dependency":
                return "hsl(var(--secondary))";
              case "dependent":
                return "hsl(var(--accent))";
              default:
                return "hsl(var(--muted))";
            }
          }}
        />
        <Background gap={12} size={1} className="bg-muted/20" />
      </ReactFlow>
    </div>
  );
}
