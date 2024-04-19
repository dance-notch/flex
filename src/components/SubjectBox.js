import React from "react";
import { useDraggable } from "@dnd-kit/core";
function SubjectBox({ id, codeId, course, color = "gray" }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { codeId },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    course && (
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`w-[183px] h-[100px] border-[1px] rounded flex `}
      >
        <div className={`h-full w-[25px] rounded-l bg-hack-gray-stroke`}></div>
        <div className="w-full text-center flex flex-col justify-center items-center text-hack-gray-text">
          <p className="font-semibold">{codeId}</p>
          <p className="font-semibold">{course[codeId].shortName}</p>
          <p>{course[codeId].credits} credits</p>
        </div>
      </div>
    )
  );
}

export default SubjectBox;
