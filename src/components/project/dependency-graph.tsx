"use client";

import {
  Background,
  ConnectionLineType,
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
import { useCallback, useMemo } from "react";
import "@xyflow/react/dist/style.css";
import dagre from "@dagrejs/dagre";
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

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({ rankdir: "LR" });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
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

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    // Current Project (Center)
    nodes.push({
      id: currentProject.id,
      type: "input", // or default, but making it visually distinct might be nice
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
    // "Me -> Them" means I am the source, they are the target.
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
    // "Them -> Me" means they are source, I am target.
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

    return getLayoutedElements(nodes, edges);
  }, [currentProject, dependencies, dependents]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (node.id !== currentProject.id) {
        router.push(`/projects/${node.id}`);
      }
    },
    [router, currentProject.id],
  );

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
