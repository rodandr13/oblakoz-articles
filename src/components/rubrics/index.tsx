"use client";

import { Box, List, ListItem } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Rubric } from "@/types";

const rubricList = {
  display: "flex",
  position: "relative",
  margin: "0",
  padding: "8px 0",
  gap: "8px",
  overflowX: "auto",
  overscrollBehavior: "auto",
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none",
};

const rubricItem = {
  backgroundColor: "rgb(255, 255, 255)",
  lineHeight: "1.43",
  borderRadius: "6px",
  padding: "6px 8px",
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  width: "auto",
  cursor: "pointer",
  scrollSnapAlign: "start",
  scrollSnapStop: "always",
  "&:hover": {
    backgroundColor: "rgb(241, 241, 241)",
  },
};

const activeRubricItem = {
  boxShadow: "2px 2px 8px rgba(107, 117, 159, 0.3)",
};

interface Props {
  rubrics: Rubric[];
  activeRubrics: string[];
}

export const Rubrics = ({ rubrics, activeRubrics }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let pathname = usePathname();
  const selectedPage = searchParams?.get("page");

  if (!pathname) {
    pathname = "/";
  }

  const handleClick = (id: string) => {
    const updateActiveRubric = activeRubrics.includes(id)
      ? activeRubrics.filter((item) => item !== id)
      : [...activeRubrics, id];
    const joinedActiveRubrics = updateActiveRubric.join("__");

    const params = new URLSearchParams();

    if (selectedPage) {
      params.set("page", selectedPage);
    }

    if (joinedActiveRubrics) {
      params.set("rubrics", joinedActiveRubrics);
    }

    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(url);
  };

  return (
    <Box>
      <List sx={rubricList}>
        {rubrics.map((rubric) => (
          <ListItem
            onClick={() => handleClick(rubric.id)}
            sx={{
              ...rubricItem,
              ...(activeRubrics.includes(rubric.id) && activeRubricItem),
            }}
            key={rubric.id}
          >
            {rubric.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
