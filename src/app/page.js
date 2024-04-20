"use client";
import Navbar from "@/components/Navbar";
import CurriculumSection from "@/components/CurriculumSection";
import GenedSection from "@/components/GenedSection";
import SummarySection from "@/components/SummarySection";
import { DndContext } from "@dnd-kit/core";
import { dataSemester, dataCourse } from "@/utilities/dataSemester";
import { useEffect, useState } from "react";
import { useSensor, useSensors, MouseSensor } from "@dnd-kit/core";

export default function Home() {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    })
  );
  const [semester, setSemester] = useState(dataSemester);
  const [course, setCourse] = useState(dataCourse);

  const reset = () => {
    setSemester(dataSemester);
    setCourse(dataCourse);
    window.location.reload();
  };

  if (window.innerWidth < 1024) {
    return (
      <main className="flex flex-col items-center justify-center bg-white w-full min-h-screen font-poppins">
        <h1 className="w-full text-primary text-bold text-2xl text-center p-4">
          Please use desktop device for continue
        </h1>
      </main>
    );
  }
  console.log("semester", semester);

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
          console.log("active", active);
          console.log("over", over);
          console.log(
            overId,
            activeYear,
            activeSemester,
            activeId,
            activeCodeId
          );
          setSemester((prevData) =>
            prevData.map((item, index) => {
              if (
                over.data.current.year === item.year &&
                over.data.current.semester === item.semester
              ) {
                console.log(activeId, overId);
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
    </main>
  );
}
