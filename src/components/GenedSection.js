import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from "./theme";
import SubjectBox from "./SubjectBox";

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

function GenedSection({ course }) {
  return (
    <ThemeProvider theme={theme}>
      <section className="w-full px-[42px] py-[56px]">
        {" "}
        <h2 className="text-primary text-[40px] font-semibold uppercase mb-[26px]">
          Gen-Ed
        </h2>
        <FilterSection />
        <div className="flex flex-wrap w-full h-[225px] overflow-auto gap-x-10 gap-y-[25px]">
          {Array.from({ length: 100 }, (_, index) => index + 1).map((item) => {
            return <SubjectBox codeId={"3404117"} course={course} />;
          })}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default GenedSection;
