"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";
let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#2A2D48",
      },
      name: "primary",
    }),
  },
});

function CurriculumSection() {
  return (
    <ThemeProvider theme={theme}>
      <section className="w-full px-[42px] py-[56px]">
        {" "}
        <h1 className="text-primary text-5xl font-bold uppercase mb-[42px]">
          Flex
        </h1>
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
        <div className="bg-gray-400 w-full h-full"></div>
      </section>
    </ThemeProvider>
  );
}

export default CurriculumSection;
