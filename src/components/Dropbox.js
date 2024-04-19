import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Dropbox({ id, year, semester, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { year, semester },
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-[183px] h-[100px] border-[1px] rounded border-dashed"
    >
      {children}
    </div>
  );
}

export default Dropbox;
