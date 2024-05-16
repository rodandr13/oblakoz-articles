"use client";

import { Box, Grid, Link as MuiLink, Typography } from "@mui/material";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

import { NotFound } from "@/components/notfound";
import { Pagination } from "@/components/pagination";
import { Rubrics } from "@/components/rubrics";
import { Article, PageProps } from "@/types";

interface Props {
  data: PageProps;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, "dd.MM", { locale: ru });
};

const baseUrl = "https://oblakoz.ru";

const articleLink = {
  textDecoration: "none",
  borderRadius: "18px",
  overflow: "hidden",
  display: "block",
  margin: 0,
  padding: 0,
  "&:hover": {
    boxShadow: "rgba(107, 117, 159, 0.3) 2px 2px 8px",
  },
};

const articleTitle = {
  fontWeight: 600,
  fontSize: "1.375rem",
  color: "#38414D",
  lineHeight: "1.18",
  margin: "0",
  padding: "0",
};

const textContainer = {
  padding: "24px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const details = {
  display: "flex",
  justifyContent: "space-between",
};

const articlesStyles = {
  padding: "16px 0 0 0",
};

const articleDate = {
  fontSize: "0.875rem",
  lineHeight: "1.143",
  color: "#68686D",
  margin: "0",
  padding: "0",
};

const views = {
  fontSize: "0.875rem",
  color: "#68686D",
  position: "relative",
  "&::before": {
    content: '""',
    display: "inline-block",
    width: "22px",
    height: "16px",
    position: "absolute",
    left: "-30px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundImage: "url('/images/eye.svg')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

export const Articles = ({ data }: Props) => {
  const { articles } = data;
  const columns: Article[][] = [[], [], []];
  articles.forEach((article, index) => {
    columns[index % 3].push(article);
  });

  return (
    <Box>
      <Rubrics rubrics={data.rubrics} activeRubrics={data.activeRubrics} />
      <Grid container spacing={3} sx={articlesStyles}>
        {articles.length > 0 ? (
          columns.map((column, columnIndex) => (
            <Grid
              item
              xs={4}
              key={columnIndex}
              columnGap="24px"
              rowGap="24px"
              display="flex"
              flexDirection="column"
            >
              {column.map((article) => (
                <Box key={article.id}>
                  <MuiLink
                    href={article.href}
                    component={Link}
                    sx={articleLink}
                  >
                    <Image
                      src={`${baseUrl}${article.coverSrc}`}
                      alt={article.title}
                      width={600}
                      height={316}
                      style={{
                        width: "100%",
                        height: "auto",
                        margin: "0",
                        display: "block",
                      }}
                    />
                    <Box sx={textContainer}>
                      <Box sx={details}>
                        <Typography sx={articleDate}>
                          Статьи • {formatDate(article.date)}
                        </Typography>
                        <Typography sx={views}>{article.views}</Typography>
                      </Box>
                      <Box component="h3" sx={articleTitle}>
                        {article.title}
                      </Box>
                    </Box>
                  </MuiLink>
                </Box>
              ))}
            </Grid>
          ))
        ) : (
          <NotFound />
        )}
      </Grid>
      <Pagination totalPages={data.totalPages} activePage={data.activePage} />
    </Box>
  );
};
