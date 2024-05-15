import { Box } from "@mui/material";

import { PageContainer } from "@/components/pageContainer";
import { Rubrics } from "@/components/rubrics";
import { PageProps } from "@/types";

interface Props {
  data: PageProps;
}

export const Articles = ({ data }: Props) => {
  return <Rubrics rubrics={data.rubrics} />;
};
