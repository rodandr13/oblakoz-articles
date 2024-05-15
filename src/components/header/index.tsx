"use client";

import { Container, Box } from "@mui/material";

import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

const containerStyles = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  boxSizing: "border-box",
  display: "block",
  paddingLeft: { xs: "16px", sm: "24px", md: "16px" },
  paddingRight: { xs: "16px", sm: "24px", md: "16px" },
  maxWidth: { md: "1160px" },
};

const boxStyles = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

export const Header = () => {
  return (
    <Box component="header">
      <Container maxWidth="lg" sx={containerStyles}>
        <Box component="nav" sx={boxStyles}>
          <Logo />
          <Navigation />
        </Box>
      </Container>
    </Box>
  );
};
