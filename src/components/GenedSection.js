import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from "./theme";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { dataGenEd } from "@/utilities/dataGenEd";

const FilterSection = () => {
  return (
    <div className="space-y-6 mb-5">
      <input
        className="w-full px-6 py-4 placeholder:text-primary border rounded-full"
        type="text"
        placeholder="Search all subject..."
      />
      <div className="flex gap-6">
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth fullHeight>
            <InputLabel id="demo-simple-select-label">Semester</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Semester"
            >
              <MenuItem value={10}>First Semester</MenuItem>
              <MenuItem value={20}>Second Semester</MenuItem>
              <MenuItem value={30}>Summer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Curriculum</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Curriculum"
            >
              <MenuItem value={10}>Thai</MenuItem>
              <MenuItem value={20}>International</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Context</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Context"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

function GenedSection({
  name = "Ged-Ed",
  course = "",
  setCourse = () => {},
  close = () => {},
  setCheckDelete = () => {},
  openCheck = true,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <section className="w-full px-[42px] py-[56px]">
        {" "}
        <h2 className="text-primary text-[40px] font-semibold uppercase mb-[26px]">
          {name}
        </h2>
        <FilterSection />
        <div className="flex flex-wrap w-full h-[225px] overflow-auto gap-x-10 gap-y-[25px]">
          {Object.keys(dataGenEd).map((key) => {
            const color = "gray";
            const tmpCourse = dataGenEd[key];
            const handleClick = () => {
              setCourse(dataGenEd[key]);
              setCheckDelete(false);
            };
            return (
              <div
                onClick={() => {
                  handleClick();
                  handleOpen();
                  close();
                  setData(tmpCourse);
                }}
                key={key}
                className={`hover:cursor-pointer relative w-[183px] h-[100px] border-[1px] rounded flex z-[50] border-hack-${color}-stroke active:z-[1000]`}
              >
                <div
                  className={`h-full w-[25px] rounded-l bg-hack-${color}`}
                ></div>
                <div
                  className={`w-full text-center flex flex-col justify-center items-center bg-white text-hack-${color}-text`}
                >
                  <p className="font-semibold">{key}</p>
                  <p className="font-semibold break-words">
                    {tmpCourse?.abbrName}
                  </p>
                  <p>({tmpCourse?.credit} credits)</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Modal
        open={open && openCheck}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="min-w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-14 py-12 rounded-[16px] space-y-[14px]">
          <p className="w-full flex justify-between items-center text-[32px] font-bold text-primary">
            {`${data?.courseNo} ${data?.abbrName}`}
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
            {data?.courseNameTh} <br />
            {data?.courseNameEn}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#C9CCE4] font-bold text-[20px]">
                คณะ <br /> <span className="text-primary text-wrap">Loem</span>
              </p>
            </div>
            <div>
              <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
                ภาควิชา/กลุ่มวิชา/สาขาวิชา <br />{" "}
                <span className="text-primary text-wrap">
                  {data?.department}
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
                  {data?.creditHours}
                </span>
              </p>
            </div>
            <div>
              <p className="w-[300px] text-[#C9CCE4] font-bold text-[20px]">
                หน่วยกิต <br />{" "}
                <span className="text-primary">{data?.credit}</span>
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
                  {data?.courseCondition}
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
    </ThemeProvider>
  );
}

export default GenedSection;
