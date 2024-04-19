import React from "react";

function SubjectBox({ color = "gray" }) {
  return (
    <div className={`w-[183px] h-[100px] border-[1px] rounded flex `}>
      <div className={`h-full w-[25px] rounded-l bg-hack-gray-stroke`}></div>
      <div className="w-full text-center flex flex-col justify-center items-center text-hack-gray-text">
        <p className="font-semibold">3404117</p>
        <p className="font-semibold">INTRO TO LAW</p>
        <p>({3} credits)</p>
      </div>
    </div>
  );
}

export default SubjectBox;
