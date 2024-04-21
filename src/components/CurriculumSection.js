"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SubjectBox from "./SubjectBox";
import Dropbox from "./Dropbox";
import GenEdDropBox from "./GenEdDropbox";
import { useState } from "react";

const FilterSection = ({ reset }) => {
  const [faculty, setFaculty] = useState("");
  const [major, setMajor] = useState("");
  return (
    <div className="flex justify-between mb-[10px]">
      <div className="flex gap-[10px]">
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth fullHeight>
            <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={faculty}
              label="Faculty"
              onChange={(event) => setFaculty(event.target.value)}
            >
              <MenuItem value={"Economics"}>Economics</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 230 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Major</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={major}
              label="Major"
              onChange={(event) => setMajor(event.target.value)}
            >
              <MenuItem value={"เอก"}>เอก</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          onClick={reset}
          sx={{ height: "56px", width: "56px" }}
          variant="outlined"
        >
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

function CurriculumSection({
  reset,
  semester,
  setSemester,
  course,
  setCourse,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnclick = ({ name }) => {};

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
        <FilterSection reset={reset} />
        <div className="w-full flex gap-2.5 max-h-screen overflow-auto">
          {semester.map((item) => {
            return (
              <div
                key={"123" + item.year + item.semester}
                className="text-primary bg-white w-[230px] p-2.5 min-h-[600px] h-max border-[1px] border-hack-gray-stroke rounded"
              >
                <div className="w-max h-full bg-[#FAFAFF] rounded-[15px] flex flex-col items-center p-2.5 gap-5">
                  <p className="font-semibold text-[16px] text-center py-2.5 px-[50px] border border-primary rounded-[5px] mb-4">
                    Year {item.year} <br />
                    Semester {item.semester}
                  </p>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index2) => {
                    return (
                      <Dropbox
                        key={"" + item.year + item.semester + index2}
                        id={"" + item.year + item.semester + index2}
                        year={item.year}
                        semester={item.semester}
                      >
                        {item.dropbox[index2] && course ? (
                          !item.dropbox[index2].includes("gened") &&
                          !item.dropbox[index2].includes("freeElective") &&
                          !item.dropbox[index2].includes("elective") ? (
                            <SubjectBox
                              course={course}
                              id={course[item.dropbox[index2]]?.dropbox}
                              codeId={item.dropbox[index2]}
                            />
                          ) : (
                            <GenEdDropBox
                              index={index2}
                              codeId={item.dropbox[index2]}
                              year={item.year}
                              semester={item.semester}
                              setSemester={setSemester}
                            />
                          )
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
        <div className="relative w-full flex justify-end">
          <Button
            sx={{
              height: "60px",
              width: "60px",
              borderRadius: "100%",
              position: "absolute",
              top: "-125px",
              right: "75px",
              zIndex: "2000",
            }}
            variant="contained"
            onClick={handleOpen}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5.625V24.375M24.375 15H5.625"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="min-w-[825px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-14 py-12 rounded-[16px] space-y-[14px]">
          <div className="w-full flex justify-end items-center text-[32px] font-bold text-primary mb-9">
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
          </div>
          <div className="flex justify-evenly items-center">
            {["GEN-ED", "ELECTIVES", "FREE ELECTIVES"].map((item, index) => { // Add index parameter
              const color = "gray";
              return (
                <div
                  key={index} // Add key prop with unique value
                  className={`hover:cursor-pointer w-[183px] h-[100px] border-[3px] border-dashed  rounded flex z-[50] border-hack-${color}-stroke active:z-[1000]`}
                >
                  <div
                    className={`w-full text-center flex flex-col justify-center items-center bg-white text-hack-${color}-text`}
                  >
                    <p className="font-semibold">{item}</p>
                    <p>({3} credits)</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default CurriculumSection;
