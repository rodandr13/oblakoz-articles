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
  };

  return (
    <Box>
      <MuiLink href="/" component={Link} sx={logoLink}>
        <Image
          alt="Логотип"
          src="/images/logo_with_title.svg"
          width="167"
          height="80"
          loading="lazy"
          decoding="async"
        />
      </MuiLink>
    </Box>
  );
};
