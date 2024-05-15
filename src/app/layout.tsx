import React from "react";

import { Box, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.scss";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageContainer } from "@/components/pageContainer";
import theme from "@/theme/theme";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header />
              <PageContainer sx={{ flexGrow: "1" }}>{children}</PageContainer>
              <Footer />
            </Box>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
