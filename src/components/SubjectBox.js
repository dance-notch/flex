import React from "react";
import { useDraggable } from "@dnd-kit/core";
import generateId from "@/utilities/generateId";
import { useState } from "react";
import Modal from "@mui/material/Modal";

function SubjectBox({ id = "000" + generateId(), codeId, course }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id === "xxxxxxx" ? "000" + generateId() : id,
    data: { codeId },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tmpCourse = course[codeId];
  const color = course[codeId].color ? course[codeId].color : "gray";
  return (
    course && (
      <>
        <div
          ref={setNodeRef}
          style={style}
          {...listeners}
          {...attributes}
          className={`w-[183px] h-[100px] border-[1px] rounded flex z-[50] border-hack-${color}-stroke`}
          onClick={handleOpen}
        >
          <div className={`h-full w-[25px] rounded-l bg-hack-${color}`}></div>
          <div
            className={`w-full text-center flex flex-col justify-center items-center bg-white text-hack-${color}-text`}
          >
            <p className="font-semibold">{codeId}</p>
            <p className="font-semibold">{tmpCourse?.abbrName}</p>
            <p>{tmpCourse?.credit} credits</p>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="min-w-[787px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-14 py-12 rounded-[16px] space-y-[14px]">
            <p className="w-full flex justify-between items-center text-[32px] font-bold text-primary">
              {`${tmpCourse?.courseNo} ${tmpCourse?.abbrName}`}
              <button onClick={handleClose}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.3999 21.6L21.5999 2.39999M2.3999 2.39999L21.5999 21.6"
                    stroke="#2A2D48"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </p>
            <p className="text-[24px] font-bold text-primary">
              {tmpCourse?.courseNameTh} <br />
              {tmpCourse?.courseNameEn}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#C9CCE4] font-bold text-[20px]">
                  คณะ <br /> <span className="text-primary">Loem</span>
                </p>
              </div>
              <div>
                <p className="min-w-[250px] text-[#C9CCE4] font-bold text-[20px]">
                  ภาควิชา/กลุ่มวิชา/สาขาวิชา <br />{" "}
                  <span className="text-primary">{tmpCourse?.department}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#C9CCE4] font-bold text-[20px]">
                  รูปแบบรายวิชา
                  <br />{" "}
                  <span className="text-primary">{tmpCourse?.creditHours}</span>
                </p>
              </div>
              <div>
                <p className="min-w-[250px] text-[#C9CCE4] font-bold text-[20px]">
                  หน่วยกิต <br />{" "}
                  <span className="text-primary">{tmpCourse?.credit}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className=" text-[#C9CCE4] font-bold text-[20px]">
                  สอบกลางภาค
                  <br /> <span className="text-primary">TBA</span>
                </p>
              </div>
              <div>
                <p className="min-w-[250px] text-[#C9CCE4] font-bold text-[20px]">
                  สอบปลายภาค
                  <br /> <span className="text-primary">TBA</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#C9CCE4] font-bold text-[20px]">
                  เงื่อนไขรายวิชา
                  <br />{" "}
                  <span className="text-primary">
                    {tmpCourse?.courseCondition}
                  </span>
                </p>
              </div>
              <div>
                <p className="min-w-[250px] text-[#C9CCE4] font-bold text-[20px]">
                  วิธีการวัดผล
                  <br /> <span className="text-primary">Letter Grade</span>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  );
}

export default SubjectBox;
