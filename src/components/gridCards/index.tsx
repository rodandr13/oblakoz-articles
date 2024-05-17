"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { ArticleCard } from "@/components/articleCard";
import { NotFound } from "@/components/notfound";
import { getColumns } from "@/lib/getColumns";
import { Article } from "@/types";

const articlesStyles = {
  padding: "16px 0 0 0",
};

interface Props {
  articles: Article[];
}

export const GridCards = ({ articles }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const columnsCount = isExtraSmallScreen ? 1 : isSmallScreen ? 2 : 3;

  const columns = getColumns(articles, columnsCount);

  return (
    <Grid
      container
      spacing={3}
      sx={articlesStyles}
      component="section"
      aria-label="Статьи"
    >
      {articles.length > 0 ? (
        columns.map((column, columnIndex) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={columnIndex}
            columnGap="24px"
            rowGap="24px"
            display="flex"
            flexDirection="column"
          >
            {column.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </Grid>
        ))
      ) : (
        <NotFound />
      )}
    </Grid>
  );
};
