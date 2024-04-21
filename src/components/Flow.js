"use client";

import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from "reactflow";

import "reactflow/dist/style.css";
import SubjectBox from "@/components/SubjectBox";

const nodeTypes = {
  custom: SubjectBox,
};

export default function Flow({ nodes: initNodes, edges: initEdges }) {
  const [nodes, setNodes] = useState(initNodes);
  const [edges, setEdges] = useState(initEdges);

  const onNodesChange = useCallback(
    (chs) => {
      setNodes((nds) => applyNodeChanges(chs, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (chs) => {
      setEdges((eds) => applyEdgeChanges(chs, eds));
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}
