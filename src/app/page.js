"use client";
import Navbar from "@/components/Navbar";
import CurriculumSection from "@/components/CurriculumSection";
import GenedSection from "@/components/GenedSection";
import SummarySection from "@/components/SummarySection";
import { DndContext } from "@dnd-kit/core";
import { dataSemester, dataCourse } from "@/components/dataSemester";
import { useState } from "react";

export default function Home() {
  const [semester, setSemester] = useState(dataSemester);
  const [course, setCourse] = useState(dataCourse);
  return (
    <main className="bg-white w-full h-full">
      <Navbar />
      <DndContext
        onDragEnd={(event) => {
          const { active, over } = event;
          const overId = over.id[2];
          const activeYear = active.id[0] - 0;
          const activeSemester = active.id[1] - 0;
          const activeId = active.id[2];
          const activeCodeId = active.data.current.codeId;
          // console.log("active", active);
          // console.log("over", over);
          // console.log(
          //   overId,
          //   activeYear,
          //   activeSemester,
          //   activeId,
          //   activeCodeId
          // );
          setSemester((prevData) =>
            prevData.map((item, index) => {
              if (
                over.data.current.year === item.year &&
                over.data.current.semester === item.semester
              ) {
                if (activeId === overId) {
                  return {
                    ...item,
                    dropbox: {
                      ...item.dropbox,
                      [overId]: activeCodeId,
                    },
                  };
                }
                return {
                  ...item,
                  dropbox: {
                    ...item.dropbox,
                    [overId]: activeCodeId,
                    [activeId]: null,
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
          setCourse((prevData) => ({
            ...prevData,
            [activeCodeId]: {
              ...prevData[activeCodeId],
              dropbox:
                "" +
                over.data.current.year +
                over.data.current.semester +
                overId,
            },
          }));
        }}
      >
        <CurriculumSection
          semester={semester}
          setSemester-={setSemester}
          course={course}
          setCourse={setCourse}
        />
        <GenedSection />
      </DndContext>
      <SummarySection />
    </main>
  );
}
