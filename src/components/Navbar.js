import React from "react";

function Navbar() {
  return (
    <nav className="px-[42px] w-full py-[22px] border-b-[1px]">
      <ul className="flex justify-between items-center text-primary">
        <div className="flex items-center gap-[54px]">
          <li className="text-5xl font-bold uppercase">
            <div className="flex items-center text-primary">
              <h1 className=" text-5xl font-bold uppercase pr-3 py-2 border-r-2 border-primary">
                Flex
              </h1>
              <p className="pl-3 py-2 text-xs font-semibold">
                flexible <br /> degree <br /> planner
              </p>
            </div>
          </li>
          <li className="text-2xl font-semibold text-2x">Find Curriculum</li>
          <li className="text-2xl font-semibold">About us</li>
        </div>
        <li className="text-3xl font-semibold">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
