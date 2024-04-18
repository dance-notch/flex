import React from "react";

function Navbar() {
  return (
    <nav className="px-[42px] w-full py-[22px]">
      <ul className="flex justify-between items-center text-primary">
        <div className="flex items-center gap-[54px]">
          <li className="text-5xl font-bold uppercase">Flex</li>
          <li className="text-2xl font-semibold text-2x">Find Curriculum</li>
          <li className="text-2xl font-semibold">About us</li>
        </div>
        <li className="text-3xl font-semibold">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
