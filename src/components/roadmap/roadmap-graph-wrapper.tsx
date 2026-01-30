"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { RoadmapGraph } from "./roadmap-graph";

const RoadmapGraphComponent = dynamic(
  () => import("./roadmap-graph").then((mod) => mod.RoadmapGraph),
  { ssr: false },
);

export function RoadmapGraphWrapper(
  props: ComponentProps<typeof RoadmapGraph>,
) {
  return <RoadmapGraphComponent {...props} />;
}
