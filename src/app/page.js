"use client";
import Navbar from "@/components/Navbar";
import Modal from "@mui/material/Modal";
import CurriculumSection from "@/components/CurriculumSection";
import GenedSection from "@/components/GenedSection";
import SummarySection from "@/components/SummarySection";
import { DndContext } from "@dnd-kit/core";
import { dataSemester, dataCourse } from "@/utilities/dataSemester";
import { useState } from "react";
import { useSensor, useSensors, MouseSensor } from "@dnd-kit/core";

export default function Home() {
  const [alertOpen, setAlertOpen] = useState(false);
  const alertHandleOpen = () => setAlertOpen(true);
  const alertHandleClose = () => setAlertOpen(false);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    })
  );
  const [messageEiEi, setMessageEiEi] = useState([]);
  const [semester, setSemester] = useState(dataSemester);
  const [course, setCourse] = useState(dataCourse);
  const reset = () => {
    setSemester(dataSemester);
    setCourse(dataCourse);
    window.location.reload();
  };

  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return (
      <main className="flex flex-col items-center justify-center bg-white w-full min-h-screen font-poppins">
        <h1 className="w-full text-primary text-bold text-2xl text-center p-4">
          Please use desktop device for continue
        </h1>
      </main>
    );
  }
  
  return (
    <main className="bg-white w-full h-full font-poppins">
      <Navbar />
      <DndContext
        sensors={sensors}
        onDragEnd={(event) => {
          const { active, over } = event;

          if (
            semester.filter(
              (item) =>
                item.year + "" === over.id[0] &&
                item.semester + "" === over.id[1]
            )[0].dropbox[over.id[2]] ||
            !over
          ) {
            return;
          }

          const overId = over.id[2];
          const overYear = over.data.current.year;
          const overSemester = over.data.current.semester;
          const activeYear = active.id[0] ? active.id[0] - 0 : 0;
          const activeSemester = active.id[1] ? active.id[1] - 0 : 0;
          const activeId = active.id[2] ? active.id[2] : 0;
          const activeCodeId = active.data.current.checkDelete
            ? ""
            : active.data.current.codeId;
          const check =
            active.id.includes("gened") ||
            active.id.includes("elective") ||
            active.id.includes("freeElective");
          // console.log("active", active);
          // console.log("over", over);
          // console.log(
          //   overId,
          //   activeYear,
          //   activeSemester,
          //   activeId,
          //   activeCodeId
          // );
          let arrayCondition =
            course[activeCodeId]?.courseCondition.match(/\d+/g);
          // console.log("arrayCondition", arrayCondition);
          let All_check = false;
          let clear = false;
          const message = [];
          let tempCheck = false;
          semester.forEach((item) => {
            if (All_check || clear) {
              return;
            }
            // console.log("item", item);
            // console.log("over", overYear, overSemester);
            if (item.year === overYear && item.semester === overSemester) {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((item2) => {
                if (item.dropbox[item2]) {
                  const courseNumber =
                    course[item.dropbox[item2]]?.courseCondition.match(/\d+/g);
                  if (
                    courseNumber ? courseNumber.includes(activeCodeId) : false
                  ) {
                    message.push(
                      `ไม่สามารถนำมาไว้ในเทอมนี้ได้ เนื่องจากจะต้องเรียนก่อนที่จะลงวิชา ${item.dropbox[item2]} `
                    );
                    All_check = true;
                    return;
                  }
                }
              });
              clear = true;
            } else if (
              item.year === activeYear &&
              item.semester === activeSemester
            ) {
              tempCheck = true;
            } else if (tempCheck) {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((item2) => {
                // console.log("if 3");
                if (item.dropbox[item2]) {
                  const courseNumber =
                    course[item.dropbox[item2]]?.courseCondition.match(/\d+/g);
                  if (
                    courseNumber ? courseNumber.includes(activeCodeId) : false
                  ) {
                    message.push(
                      `ไม่สามารถนำไปไว้เทอมดังกล่าวได้ เนื่องจากจะต้องเรียนก่อนที่จะลงวิชา ${item.dropbox[item2]} `
                    );
                    All_check = true;
                    return;
                  }
                }
              });
            } else {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((item2) => {
                // console.log("if 4");
                if (item.dropbox[item2]) {
                  if (
                    arrayCondition
                      ? arrayCondition.includes(item.dropbox[item2])
                      : false
                  ) {
                    arrayCondition = arrayCondition.filter(
                      (item3) => item3 !== item.dropbox[item2]
                    );
                  }
                }
              });
            }
          });
          if (arrayCondition ? arrayCondition.length > 0 : false) {
            message.push(
              `ไม่สามารถลงรายวิชานี้ได้ เนื่องจากขาดรายวิชาพื้นฐาน ${arrayCondition.map(
                (item) => `${item}`
              )} `
            );
            All_check = true;
          }
          if (All_check) {
            setMessageEiEi(message);
            alertHandleOpen();

            return;
          }
          setSemester((prevData) =>
            prevData.map((item, index) => {
              if (
                over.data.current.year === item.year &&
                over.data.current.semester === item.semester
              ) {
                // console.log(activeId, overId);
                if (
                  over.data.current.year === activeYear &&
                  over.data.current.semester === activeSemester
                ) {
                  return {
                    ...item,
                    dropbox: {
                      ...item.dropbox,
                      [overId]: !check
                        ? activeCodeId
                        : activeCodeId + active.id.replace(/[0-9]/g, ""),
                      [activeId]: null,
                    },
                  };
                }
                return {
                  ...item,
                  dropbox: {
                    ...item.dropbox,
                    [overId]: !check
                      ? activeCodeId
                      : activeCodeId + active.id.replace(/[0-9]/g, ""),
                  },
                };
              } else if (
                activeYear === item.year &&
                activeSemester === item.semester
              ) {
                return {
                  ...item,
                  dropbox: { ...item.dropbox, [activeId]: null },
                };
              } else {
                return { ...item };
              }
            })
          );
          setCourse((prevData) => {
            const newData = { ...prevData };
            const courseToUpdate = newData[activeCodeId];
            if (courseToUpdate) {
              courseToUpdate.dropbox =
                "" +
                over.data.current.year +
                over.data.current.semester +
                overId;
            }

            return newData;
          });
        }}
      >
        <CurriculumSection
          reset={reset}
          semester={semester}
          setSemester={setSemester}
          course={course}
          setCourse={setCourse}
        />
      </DndContext>

      <GenedSection />
      <SummarySection />
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
              className="mb-8 stroke-yellow-400"
              width="120"
              height="108"
              viewBox="0 0 120 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.0017 42.467V65.5145M2.87137 86.2634C-2.44679 95.4824 4.20399 107 14.8342 107H105.169C115.793 107 122.444 95.4824 117.132 86.2634L71.9706 7.91425C66.6525 -1.30475 53.3509 -1.30475 48.0328 7.91425L2.87137 86.2634ZM60.0017 83.9525H60.0447V84.0017H60.0017V83.9525Z"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-primary font-medium text-[32px] text-center break-words mb-16">
              <span className="font-bold text-red-500">Warning</span> <br />
              {messageEiEi.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </p>
          </div>
        </div>
      </Modal>
    </main>
  );
}
