"use client";

import { ReactNode } from "react";

import { Container, ContainerProps } from "@mui/material";

interface PageContainerProps extends ContainerProps {
  children: ReactNode;
}

const containerStyles = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  boxSizing: "border-box",
  display: "block",
  paddingLeft: { xs: "16px", sm: "24px", md: "16px" },
  paddingRight: { xs: "16px", sm: "24px", md: "16px" },
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container sx={containerStyles} {...props} maxWidth="lg">
      {children}
    </Container>
  );
};
