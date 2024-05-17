"use client";

import { Box, List, ListItem, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export const Navigation = () => {
  const boxStyles = {
    gap: { xs: "12px", md: "40px", lg: "64px" },
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };
  const buttonLink = {
    margin: 0,
    font: "inherit",
    color: "#fff",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#58A1FF",
    overflow: "hidden",
    position: "relative",
    padding: "10px 38px",
    zIndex: 2,
    textAlign: "center",
    borderRadius: "8px",
    transition: "background-color 0.3s",
    "&:hover": {
      textDecorationColor: "inherit",
      background: "transparent",
      "&:before": {
        opacity: 1,
      },
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(43.8deg, #4AA7FF 12.89%, #4F40FF 105.31%)",
      zIndex: -1,
      opacity: 0,
      transition: "opacity 0.3s",
    },
  };

  const itemStyles = {
    margin: 0,
    padding: 0,
    display: "flex",
    columnGap: "76px",
    justifyContent: "flex-end",
    alignItems: "center",
    whiteSpace: "nowrap",
  };

  const listStyles = {
    margin: 0,
    padding: 0,
    display: "flex",
    gap: { xs: "12px", md: "40px", lg: "76px" },
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const menuLink = {
    textDecoration: "none",
    color: "#68686D",
    transition: "color 0.3s",
    fontSize: "1rem",
    fontWeight: 500,
    "&:hover": {
      color: "#38414D",
    },
  };
  const hiddenOnXs = {
    display: { xs: "none", sm: "flex" },
  };

  const hiddenOnMd = {
    display: { xs: "none", lg: "flex" },
  };

  return (
    <Box sx={boxStyles}>
      <List sx={listStyles}>
        <ListItem sx={{ ...itemStyles, ...hiddenOnXs }}>
          <MuiLink href="/articles" component={Link} sx={menuLink}>
            Учительская
          </MuiLink>
        </ListItem>
        <ListItem sx={{ ...itemStyles, ...hiddenOnMd }}>
          <MuiLink href="/articles" component={Link} sx={menuLink}>
            О сервисе
          </MuiLink>
        </ListItem>
        <ListItem sx={{ ...itemStyles, ...hiddenOnMd }}>
          <MuiLink href="/articles" component={Link} sx={menuLink}>
            Предметы
          </MuiLink>
        </ListItem>
        <ListItem sx={{ ...itemStyles, ...hiddenOnXs }}>
          <MuiLink href="/articles" component={Link} sx={menuLink}>
            Ввести код
          </MuiLink>
        </ListItem>
      </List>
      <MuiLink href="/articles" component={Link} sx={buttonLink}>
        Войти
      </MuiLink>
    </Box>
  );
};
