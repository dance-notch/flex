import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";

function GenEdDropBox({ index, id, codeId, year, semester }) {
  const color = "gray";
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "" + year + semester + index + "gened",
    data: { codeId },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const tempCode =
    codeId === "gened"
      ? "GEN-ED"
      : codeId === "elective"
      ? "ELECTIVES"
      : "FREE ELECTIVES";
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`relative w-[183px] h-[100px] border-[3px] border-dashed  rounded flex z-[50] border-hack-${color}-stroke active:z-[1000]`}
    >
      <div className="absolute w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <svg
          className={`absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 stroke-hack-${color}-stroke`}
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.375 10.375L16.625 16.625L10.375 10.375ZM16.625 10.375L10.375 16.625L16.625 10.375ZM26 13.5C26 15.1415 25.6767 16.767 25.0485 18.2835C24.4203 19.8001 23.4996 21.1781 22.3388 22.3388C21.1781 23.4996 19.8001 24.4203 18.2835 25.0485C16.767 25.6767 15.1415 26 13.5 26C11.8585 26 10.233 25.6767 8.71646 25.0485C7.19989 24.4203 5.8219 23.4996 4.66116 22.3388C3.50043 21.1781 2.57969 19.8001 1.95151 18.2835C1.32332 16.767 1 15.1415 1 13.5C1 10.1848 2.31696 7.00537 4.66116 4.66117C7.00537 2.31696 10.1848 1 13.5 1C16.8152 1 19.9946 2.31696 22.3388 4.66117C24.683 7.00537 26 10.1848 26 13.5Z"
            fill="#FAFAFF"
          />
          <path
            d="M10.375 10.375L16.625 16.625M16.625 10.375L10.375 16.625M26 13.5C26 15.1415 25.6767 16.767 25.0485 18.2835C24.4203 19.8001 23.4996 21.1781 22.3388 22.3388C21.1781 23.4996 19.8001 24.4203 18.2835 25.0485C16.767 25.6767 15.1415 26 13.5 26C11.8585 26 10.233 25.6767 8.71646 25.0485C7.19989 24.4203 5.8219 23.4996 4.66116 22.3388C3.50043 21.1781 2.57969 19.8001 1.95151 18.2835C1.32332 16.767 1 15.1415 1 13.5C1 10.1848 2.31696 7.00537 4.66116 4.66117C7.00537 2.31696 10.1848 1 13.5 1C16.8152 1 19.9946 2.31696 22.3388 4.66117C24.683 7.00537 26 10.1848 26 13.5Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* <div className={`h-full w-[25px] rounded-l bg-hack-${color}`}></div> */}
      <div
        className={`w-full text-center flex flex-col justify-center items-center bg-white text-hack-${color}-text`}
      >
        <p className="font-semibold">{tempCode}</p>
        {/* <p className="font-semibold break-words">{tmpCourse?.abbrName}</p> */}
        <p>(3 credits)</p>
      </div>
    </div>
  );
}

export default GenEdDropBox;
