"use client";

import { Box, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const logoLink = {
    display: "block",
    color: "#081A2C",
    lineHeight: "0",
    margin: "0",
    font: "inherit",
    textDecoration: "none",
    position: "relative",
    width: { xs: "125px", lg: "167px" },
    height: { xs: "40px", lg: "80px" },
    "& > img": {
      objectFit: "cover",
    },
  };

  return (
    <Box>
      <MuiLink href="/" component={Link} sx={logoLink}>
        <Image
          alt="Логотип"
          src="/images/logo_with_title.svg"
          loading="eager"
          fill
        />
      </MuiLink>
    </Box>
  );
};
