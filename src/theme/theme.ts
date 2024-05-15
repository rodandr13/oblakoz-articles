"use client";

import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

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
  typography: {
    fontFamily: `${montserrat.style.fontFamily}, Arial, sans-serif`,
  },
});

export default theme;
