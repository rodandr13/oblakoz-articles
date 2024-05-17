import { Box } from "@mui/material";

import { GridCards } from "@/components/gridCards";
import { Pagination } from "@/components/pagination";
import { Rubrics } from "@/components/rubrics";
import { PageProps } from "@/types";

interface Props {
  data: PageProps;
}

export const Articles = ({ data }: Props) => {
  return (
    <Box component="main">
      <Rubrics rubrics={data.rubrics} activeRubrics={data.activeRubrics} />
      <GridCards articles={data.articles} />
      <Pagination totalPages={data.totalPages} activePage={data.activePage} />
    </Box>
  );
};
