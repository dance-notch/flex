"use client";
import { createTheme } from "@mui/material/styles";
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

export default theme;
