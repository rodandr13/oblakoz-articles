import { Box, List, ListItem } from "@mui/material";
import { Rubric } from "@/types";

interface Props {
  rubrics: Rubric[];
}

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

export const Rubrics = ({ rubrics }: Props) => {
  return (
    <Box>
      <List sx={rubricList}>
        {rubrics.map((rubric) => (
          <ListItem sx={rubricItem} key={rubric.id}>
            {rubric.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
