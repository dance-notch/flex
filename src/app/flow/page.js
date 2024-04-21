"use client";

import { Edge, Node, Position, ReactFlowProvider } from "reactflow";
import React, { useEffect, useState } from "react";
import "reactflow/dist/style.css";
import { dataCourse } from "@/utilities/dataSemester";

import Flow from "@/components/Flow";

const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: { course: dataCourse, codeId: "3404117", color: "blue" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { course: dataCourse, codeId: "3404117", color: "blue" },
    position: { x: 200, y: -200 },
  },
  {
    id: "3",
    type: "custom",
    data: { course: dataCourse, codeId: "3404117", color: "blue" },
    position: { x: 200, y: 200 },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: { stroke: "#2A2D48" },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    style: { stroke: "#2A2D48" },
  },
];

export default function App() {
  const { nodes, edges } = { nodes: initialNodes, edges: initialEdges };
  return (
    <div className="flex justify-center items-center bg-secondary">
      <ReactFlowProvider initialNodes={nodes} initialEdges={edges}>
        <Flow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </div>
  );
}
