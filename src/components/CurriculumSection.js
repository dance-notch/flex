"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SubjectBox from "./SubjectBox";
import Dropbox from "./Dropbox";

const FilterSection = () => {
  return (
    <div className="flex justify-between mb-[10px]">
      <div className="flex gap-[10px]">
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth fullHeight>
            <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Faculty"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Major</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Major"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button sx={{ height: "56px", width: "56px" }} variant="outlined">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.023 9.348H21.015L17.834 6.165C16.8099 5.14087 15.5342 4.40439 14.1352 4.02961C12.7362 3.65482 11.2632 3.65493 9.86426 4.02992C8.46532 4.40492 7.18976 5.14159 6.16579 6.16587C5.14183 7.19015 4.40556 8.46595 4.03099 9.865M2.98499 19.644V14.652M2.98499 14.652H7.97699M2.98499 14.652L6.16499 17.835C7.18911 18.8591 8.46479 19.5956 9.86378 19.9704C11.2628 20.3452 12.7358 20.3451 14.1347 19.9701C15.5337 19.5951 16.8092 18.8584 17.8332 17.8341C18.8572 16.8099 19.5934 15.5341 19.968 14.135M21.015 4.356V9.346"
              stroke="#2A2D48"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div className="space-x-[14px]">
        <Button
          sx={{
            height: "56px",
            width: "160px",
          }}
          color="primary"
          variant="contained"
        >
          Degree Plan
        </Button>
        <Button sx={{ height: "56px", width: "160px" }} variant="outlined">
          Schedule
        </Button>
      </div>
    </div>
  );
};

function CurriculumSection({ semester, setSemester, course, setCourse }) {
  return (
    <ThemeProvider theme={theme}>
      <section className="w-full px-[42px] py-[56px]">
        {" "}
        <div className="flex items-center mb-[42px] text-primary uppercase">
          <h1 className=" text-5xl font-bold pr-3 py-2 border-r-2 border-primary">
            Flex
          </h1>
          <p className="pl-3 py-2 text-xs font-semibold">
            flexible <br /> degree <br /> planner
          </p>
        </div>
        <FilterSection />
        <div className="w-full flex gap-2.5 max-h-screen overflow-auto">
          {semester.map((item) => {
            return (
              <div className="text-primary bg-white w-[230px] p-2.5 min-h-[600px] h-max border-[1px] border-hack-gray-stroke rounded">
                <div className="w-max h-full bg-[#FAFAFF] rounded-[15px] flex flex-col items-center p-2.5 gap-5">
                  <p className="font-semibold text-[16px] text-center py-2.5 px-[50px] border border-primary rounded-[5px] mb-4">
                    Year {item.year} <br />
                    Semester {item.semester}
                  </p>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index2) => {
                    return (
                      <Dropbox
                        id={"" + item.year + item.semester + index2}
                        year={item.year}
                        semester={item.semester}
                      >
                        {/* {item.dropbox[index2] ? (
                          <SubjectBox
                            course={course}
                            id={course[item.dropbox[index2]].dropbox}
                            codeId={item.dropbox[index2]}
                          /> */}
                        {item.dropbox[index2] && course ? (
                          <SubjectBox
                            course={course}
                            id={course[item.dropbox[index2]]?.dropbox}
                            codeId={item.dropbox[index2]}
                          />
                        ) : (
                          <></>
                        )}
                      </Dropbox>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default CurriculumSection;
