import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Dropbox({ id, year, semester, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { year, semester },
  });
  return (
    <div
      ref={setNodeRef}
      className="w-[183px] h-[100px]  border-[1px] rounded border-dashed"
    >
      {children}
    </div>
  );
}

export default Dropbox;
