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

type RoadmapGraphProps = {
  projects: {
    id: string;
    title: string;
    order: number;
    description: string | null;
  }[];
};

const nodeWidth = 200;
const nodeHeight = 80;

const elk = new ELK();

function CustomNode({ data }: { data: { label: string; order: number } }) {
  return (
    <div
      className="rounded-lg p-3 bg-card border-2 border-primary shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-center h-full"
      style={{ width: nodeWidth, height: nodeHeight }}
    >
      <div className="flex items-center gap-2 mb-1">
        <Box className="h-4 w-4 text-primary" />
        <span className="text-xs font-bold text-muted-foreground">
          Step {data.order}
        </span>
      </div>
      <div className="font-semibold text-sm line-clamp-2 leading-tight">
        {data.label}
      </div>
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

export function RoadmapGraph({ projects }: RoadmapGraphProps) {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const computeLayout = async () => {
      const initialNodes: Node[] = projects.map((p) => ({
        id: p.id,
        type: "custom",
        data: { label: p.title, order: p.order },
        position: { x: 0, y: 0 },
      }));

      const initialEdges: Edge[] = [];
      // Create edges between sequential projects
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
            color: "#64748b", // slate-500
          },
          style: {
            stroke: "#64748b", // slate-500
            strokeWidth: 2,
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
  }, [projects, setNodes, setEdges]);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      router.push(`/projects/${node.id}`);
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
        No projects in this roadmap yet.
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
