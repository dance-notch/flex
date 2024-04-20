import React from "react";
import { useDraggable } from "@dnd-kit/core";
import generateId from "@/utilities/generateId";
import { useState } from "react";
import Modal from "@mui/material/Modal";

function GenEdBox({ codeId, course }) {
  return <></>;
}

function SubjectBox({ id, codeId, course }) {
  if (id === "xxxxxxx") {
    return <></>;
  }

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
  const [alertOpen, setAlertOpen] = useState(false);
  const alertHandleOpen = () => setAlertOpen(true);
  const alertHandleClose = () => {
    setAlertOpen(false);
    setOpen(false);
  };

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
          className={`relative w-[183px] h-[100px] border-[1px] rounded flex z-[50] border-hack-${color}-stroke`}
        >
          <div
            onClick={handleOpen}
            className="z-10 absolute w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              onClick={alertHandleOpen}
              className={`z-50 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 stroke-hack-${color}-stroke`}
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
          <div className={`h-full w-[25px] rounded-l bg-hack-${color}`}></div>
          <div
            className={`w-full text-center flex flex-col justify-center items-center bg-white text-hack-${color}-text`}
          >
            <p className="font-semibold">{codeId}</p>
            <p className="font-semibold break-words">{tmpCourse?.abbrName}</p>
            <p>{tmpCourse?.credit} credits</p>
          </div>
        </div>
        <Modal
          open={open && !alertOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="min-w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-14 py-12 rounded-[16px] space-y-[14px]">
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
                  คณะ <br />{" "}
                  <span className="text-primary text-wrap">Loem</span>
                </p>
              </div>
              <div>
                <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
                  ภาควิชา/กลุ่มวิชา/สาขาวิชา <br />{" "}
                  <span className="text-primary text-wrap">
                    {tmpCourse?.department}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="max-w-[350px] text-[#C9CCE4] font-bold text-[20px]">
                  รูปแบบรายวิชา
                  <br />{" "}
                  <span className="text-primary text-wrap">
                    {tmpCourse?.creditHours}
                  </span>
                </p>
              </div>
              <div>
                <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
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
                <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
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
                  <span className="text-primary text-wrap">
                    {tmpCourse?.courseCondition}
                  </span>
                </p>
              </div>
              <div>
                <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
                  วิธีการวัดผล
                  <br /> <span className="text-primary">Letter Grade</span>
                </p>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          open={alertOpen}
          onClose={alertHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="min-w-[825px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-14 py-12 rounded-[16px] space-y-[14px]">
            <div className="w-full flex justify-end items-center text-[32px] font-bold text-primary mb-9">
              <button onClick={alertHandleClose}>
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
            </div>
            <div className="flex flex-col items-center">
              <svg
                className="mb-8"
                width="120"
                height="108"
                viewBox="0 0 120 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.0017 42.467V65.5145M2.87137 86.2634C-2.44679 95.4824 4.20399 107 14.8342 107H105.169C115.793 107 122.444 95.4824 117.132 86.2634L71.9706 7.91425C66.6525 -1.30475 53.3509 -1.30475 48.0328 7.91425L2.87137 86.2634ZM60.0017 83.9525H60.0447V84.0017H60.0017V83.9525Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-primary font-medium text-[32px] text-center break-words mb-16">
                <span className="font-bold">{`${tmpCourse?.courseNo} ${tmpCourse?.abbrName} `}</span>
                is a compulsory course. You can’t not remove this course from
                the plan
              </p>
            </div>
          </div>
        </Modal>
      </>
    )
  );
}

export default SubjectBox;
