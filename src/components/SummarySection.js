import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function SummarySection() {
  return (
    <ThemeProvider theme={theme}>
      <section className=" px-[42px] py-[56px]">
        <div className="px-[30px] py-5 border w-[578px] rounded-[10px]">
          <h2 className="text-primary text-4xl font-bold mb-3">Summary</h2>
          <ul className="w-full space-y-3">
            <li className="text-2xl flex justify-between">
              General Education<span>0/24</span>
            </li>
            <li className="text-2xl flex justify-between">
              English<span>15/15</span>
            </li>
            <li className="text-2xl flex justify-between">
              Specialized Courses<span>62/86</span>
            </li>
            <li className="text-2xl flex justify-between">
              Free Electives<span>3/6</span>
            </li>
            <li className="text-2xl font-bold flex justify-between">
              Total Credits<span>80/131</span>
            </li>
          </ul>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SummarySection;
