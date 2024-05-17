"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination as MuiPagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Link from "next/link";

interface Props {
  totalPages: number;
  activePage: number;
}

export const Pagination = ({ totalPages, activePage }: Props) => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      padding="24px 0 48px 0"
    >
      <MuiPagination
        count={totalPages}
        page={activePage}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            component={Link}
            href={`/articles/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
