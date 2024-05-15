"use client";

import { Box, Link as MuiLink, List, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ContentNavigation = () => {
  const pathname = usePathname();

  const nav = {
    padding: "24px 0 8px 0",
  };

  const navList = {
    display: "flex",
    gap: "16px",
    margin: "0",
    padding: "0",
    "& > li": {
      width: "auto",
      margin: "0",
      padding: "0",
    },
  };

  const navLink = {
    color: "#38414D",
    opacity: "0.8",
    transition: "color 0.3s",
    textDecoration: "none",
    fontSize: "1.125rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    display: "block",
    padding: "10px 8px 10px 34px",
    borderRadius: "8px",
    position: "relative",
    "&::before": {
      content: '""',
      display: "inline-block",
      width: "24px",
      height: "24px",
      position: "absolute",
      left: "8px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    "&:hover": {
      opacity: "1",
    },
  };

  const activeLink = {
    boxShadow: "2px 2px 8px rgba(107, 117, 159, 0.3)",
    backgroundColor: "#fff",
    opacity: "1",
  };

  const links = [
    { href: "/all", label: "Всё", icon: "/images/all.svg" },
    { href: "/news", label: "Новости", icon: "/images/news.svg" },
    {
      href: "/materials",
      label: "Методические материалы",
      icon: "/images/guidelines.svg",
    },
    { href: "/articles", label: "Статьи", icon: "/images/articles.svg" },
    {
      href: "/notes",
      label: "Опорные конспекты",
      icon: "/images/conspects.svg",
    },
  ];

  return (
    <Box component="nav" sx={nav}>
      <List sx={navList}>
        {links.map((link) => (
          <ListItem key={link.href}>
            <MuiLink
              href={link.href}
              component={Link}
              sx={{
                ...navLink,
                "&::before": {
                  ...navLink["&::before"],
                  backgroundImage: `url(${link.icon})`,
                },
                ...(pathname === link.href && activeLink),
              }}
            >
              {link.label}
            </MuiLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
