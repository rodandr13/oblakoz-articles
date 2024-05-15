"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1160,
      xl: 1536,
    },
  },
});

export default theme;
