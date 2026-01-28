"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { DependencyGraph } from "./dependency-graph";

const DependencyGraphComponent = dynamic(
  () => import("./dependency-graph").then((mod) => mod.DependencyGraph),
  { ssr: false },
);

export function DependencyGraphWrapper(
  props: ComponentProps<typeof DependencyGraph>,
) {
  return <DependencyGraphComponent {...props} />;
}
