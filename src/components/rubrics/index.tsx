"use client";

import { Box, List, ListItem } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

import { Rubric } from "@/types";

const rubricList = {
  display: "flex",
  margin: "0",
  padding: "8px 0",
  gap: "8px",
};

const rubricItem = {
  backgroundColor: "rgb(255, 255, 255)",
  lineHeight: "1.43",
  borderRadius: "6px",
  padding: "6px 8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "0.875rem",
  width: "auto",
  cursor: "pointer",
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
  const selectedPage = searchParams?.get("page");

  const handleClick = (id: string) => {
    const updateActiveRubric = activeRubrics.includes(id)
      ? activeRubrics.filter((item) => item !== id)
      : [...activeRubrics, id];
    const joinedActiveRubrics = updateActiveRubric.join("__");

    const params = new URLSearchParams();
    if (selectedPage) {
      params.append("page", selectedPage);
      params.append("rubrics", joinedActiveRubrics);
    } else {
      params.append("rubrics", joinedActiveRubrics);
    }
    router.push(`?${params.toString()}`);
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
