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
import { useCallback, useEffect, useMemo, useState } from "react";
import "@xyflow/react/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import { useRouter } from "next/navigation";

type DependencyGraphProps = {
  currentProject: {
    id: string;
    title: string;
    description: string | null;
  };
  dependencies: {
    id: string;
    title: string;
    description: string | null;
  }[]; // Projects I depend on (Outgoing)
  dependents: {
    id: string;
    title: string;
    description: string | null;
  }[]; // Projects that depend on me (Incoming)
};

const nodeWidth = 200;
const nodeHeight = 80;

const elk = new ELK();

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
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      // Current Project (Center)
      nodes.push({
        id: currentProject.id,
        type: "input",
        data: { label: `${currentProject.title} (Current)` },
        position: { x: 0, y: 0 },
        style: {
          background: "#fff",
          border: "2px solid #000",
          borderRadius: "8px",
          padding: "10px",
          width: nodeWidth,
          fontWeight: "bold",
          textAlign: "center",
        },
      });

      // Dependencies (Projects this one depends on) -> Me -> Them
      dependencies.forEach((dep) => {
        nodes.push({
          id: dep.id,
          data: { label: dep.title },
          position: { x: 0, y: 0 },
          style: {
            background: "#f4f4f5",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: nodeWidth,
            textAlign: "center",
          },
        });
        edges.push({
          id: `e-${currentProject.id}-${dep.id}`,
          source: currentProject.id,
          target: dep.id,
          animated: true,
          type: "smoothstep",
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        });
      });

      // Dependents (Projects that depend on this one) -> Them -> Me
      dependents.forEach((dep) => {
        nodes.push({
          id: dep.id,
          data: { label: dep.title },
          position: { x: 0, y: 0 },
          style: {
            background: "#f4f4f5",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: nodeWidth,
            textAlign: "center",
          },
        });
        edges.push({
          id: `e-${dep.id}-${currentProject.id}`,
          source: dep.id,
          target: currentProject.id,
          animated: true,
          type: "smoothstep",
          markerEnd: {
            type: MarkerType.ArrowClosed,
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
    (event: React.MouseEvent, node: Node) => {
      if (node.id !== currentProject.id) {
        router.push(`/projects/${node.id}`);
      }
    },
    [router, currentProject.id],
  );

  if (isLoading) {
    return (
      <div className="h-[500px] border rounded-lg bg-slate-50 flex items-center justify-center">
        <p className="text-muted-foreground">Loading graph...</p>
      </div>
    );
  }

  return (
    <div className="h-[500px] border rounded-lg bg-slate-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
