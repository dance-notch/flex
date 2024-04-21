import React from "react";

function Navbar() {
  return (
    <nav className="z-[1000]  bg-white shadow-sm sticky top-0 px-[42px] w-full py-[22px] border-b-[1px]">
      <ul className="flex justify-between items-center text-primary">
        <div className="flex items-center gap-[54px]">
          <li className="text-5xl font-bold uppercase">
            <div className="flex items-center text-primary hover:cursor-pointer">
              <h1 className=" text-5xl font-bold uppercase pr-3 py-2 border-r-2 border-primary ">
                Flex
              </h1>
              <p className="pl-3 py-2 text-xs font-semibold ">
                flexible <br /> degree <br /> planner
              </p>
            </div>
          </li>
          <li className="text-2xl font-semibold text-2x hover:cursor-pointer">
            Find Curriculum
          </li>
          <li className="text-2xl font-semibold hover:cursor-pointer">
            About us
          </li>
        </div>
        <li className="text-3xl font-semibold hover:cursor-pointer">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
